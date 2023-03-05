/** 2023-03-05  [remix- data쓰기] */
// import { json } from '@remix-run/node';
// import { Link, useLoaderData } from '@remix-run/react';
// import { getStories } from '../../lib/api';

// export const loader = async () => {
//   const stories = await getStories();
//   return json(stories);
// };

// export default function Stories() {
//   const stories = useLoaderData();

//   return (
//     <div>
//       <h1>Stories</h1>
//       <ul>
//         {stories.map((story) => (
//           <li key={story.id}>
//             <Link to={`/stories/${story.id}`}>{story.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/** 2023-03-05  [remix- data쓰기] action함수 만들어 내보내기 */

import { json , redirect} from '@remix-run/node';
import { Link, useLoaderData, Form, useTransition } from '@remix-run/react'; //useTransition: Form의 3가지 상태조회. (idle 아무것도안함, submitting 데이터보내는중, loading )
import { createStory, getStories } from '../../lib/api'; //[remix- data쓰기]
import React, { useRef, useEffect } from 'react'; //[remix- 쓰고난후 Form공백만들기]



export const loader = async () => {
  const stories = await getStories();
  return json(stories);
};

export async function action({ request }) {  //[remix- data쓰기]
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const story = await createStory({ title, body });
 // return story;
  return redirect(`/stories/${story.id}`);

}

export default function Stories() {
  const stories = useLoaderData();
  const transition = useTransition();

  // [remix- 쓰고난후 Form공백만들기]
  const ref = useRef();
  useEffect(() => {
    if (transition.state === 'submitting') {
      ref.current?.reset();
    }
  }, [transition.state]);



  //[remix- data쓰기]
  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
      
      <Form method="post" ref={ref}>  {/*[remix- 쓰고난후 Form공백만들기] */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: 320,
          }}
        >
          <input type="text" name="title" placeholder="제목을 입력하세요..." />
          <textarea name="body" placeholder="이야기를 입력하세요..." />
          <button type="submit">
            {transition.state === 'submitting' ? '등록 중...' : '등록'}
          </button>
        </div>
      </Form>
    </div>
  );
}