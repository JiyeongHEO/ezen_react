import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';
/*
 2023-01-29 시작
#immer: js보다 쉽게 불변성 유지하며 update. 'draft'
        예시①: 
          improt produce from 'immer';
          const nextState = produce(originalState, draft =>{
            // 바꾸고 싶은 값 바꾸기
            draft.somewhere.deep.inside =5;
          })
        예시②: 
            import produce from 'immer';
            const originalState =[
              {
                id:1,
                todo:'전개 연산자와 배열 내장 함수로 불변성 유지하기',
                checked:true,
              },
              {
                id:2,
                todo:'immer로 불변성 유지하기',
                checked:false,
              }
            ];

            const nextState = produce(originalState, draft=>{
              const todo = draft.find(t => t.id ===2); //바꿀내용만 draft에서. original에서 복사해서.
              todo.checked = true;

              draft.push({
                id:3,
                todo:'일정 관리 앱에 immer 적용하기',
                checked:false,
              });
              
              draft.splice(draft.findIndex(t => t.id ===1), 1);
            }); 


# immer 사용 전
*/
// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null
//   });  

//   const onChange = useCallback(
//     e => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name] : [value]
//     });
//   },
//   [form]
//   );
    
//   const onSubmit = useCallback(
//     e => {
//       e.preventDefault();
//       const info = {
//         id: nextId.current,
//         name: form.name,
//         username: form.username
//       };

//       // array 에 새 항목 등록
//       setData({
//         ...data,
//         array: data.array.concat(info)
//       });

//       // form 초기화
//       setForm({
//         name: '',
//         username: ''
//       });
//       nextId.current += 1;
//     },
//     [data, form.name, form.username]
//   );


//   const onRemove = useCallback(
//     id => {
//       setData({
//         ...data,
//         array: data.array.filter(info => info.id !== id)
//        });
//     },
//     [data]
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>


//       <div>

//         <ul>
//           {data.array.map(info => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>

//       </div>
//     </div>
//   );
// };

const App = () => {
  
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });  

  // const onChange = useCallback(
  //   e => {
  //   const { name, value } = e.target;
  //   setForm( 
  //     produce (form, draft =>{ draft[name] = value })  //여기. 바뀌는것만draft안에다가. 
  //   );
  // },
  // [form]  //여기.
  // ); 
  //또는  위에서 form 없어도됨. 
  const onChange = useCallback(
    e => {
    const { name, value } = e.target;
    setForm( 
      produce ( draft =>{ draft[name] = value }) //여기 form
    );
  },
  [] //여기 form
  ); 

    

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array 에 새 항목 등록
      setData(
        produce (data, draft =>{ draft.array.push(info) })  //여기. data를 draft로 받아서 작업. push()이제 가능..이 아니고 해야하네.
        //또는 위data지워도됨
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData(
        produce (data, draft =>{
          //draft.array.splice(draft.array.filter(info => info.id === id) , 1)
          draft.array:draft.array.filter(info => info.id !== id)  //array: data.array.filter(info => info.id !== id)
         })  //여기. 
         //위 data지워도됨
        // draft.array.splice(draft.array.filter(info => info.id === id) , 1)도 가능(splice - 선택한것만 splice)
        // draft.array.filter(info => info.id !== id) 이거 안되는데....;;;;?????
       );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>


      <div>
      <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
};

/**
 * 라우팅: 다른 주소에 다른 화면 보여주는것
 * 
 * 
 * 
 */

export default App;