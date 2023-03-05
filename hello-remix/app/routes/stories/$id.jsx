/* 2023-03-05
[remix- 쓰고난후 Form공백만들기] 보단 404안뜨게하는거
*/
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getStory } from '../../lib/api';

export const loader = async ({ params }) => {
  const { id } = params;
  const data = await getStory(id);
  return json(data);
};

export default function Story() {
  const story = useLoaderData();
  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.body}</p>
    </div>
  );
}