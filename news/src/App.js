import './App.css';
import axios from '../node_modules/axios/index';
import { useState } from 'react';

/*  23-02-05 시작
[비동기] (eg. setTimeOut(뭐가,몇초동안) 기다리는거...를 실행중인것 ): 비동기.js 
[Axios]: yarn add axios, http요청을 promise기반으로 처리함(즉 비동기) -> .prettierrc , jsconfig.json 생성
-> 받아올 json data: https://jsonplaceholder.typicode.com/todos
 */

// function App() {
//   const [data, setdata] = useState(null)

//   const onClick = async ()=>{
//     try{
//       const res =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       setdata(res.data)   // .then(res => { setdata(res.data) })
//     }catch(e){
//       console.log(e)
//     }
//   }

//   return (
//     <div>
//         <div>
//           <button onClick={onClick}> 불러오기 </button>
//         </div>
//         {/* (data, null, 2): null은 초기화,  2는 space간격 */}
//         { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/> }

//     </div>
//   );
// }


/**
 * #News: https://newsapi.org/,  apikey: 4c9fddf5d55749edacd1fb72e7d3496a -> 가져올것{ title, description, url, urlToImage }
-> style용:  yarn add styled-components ->components폴더에 NewsList.js, NewsItem.js 추가  
 */
function App() {
  const [data, setdata] = useState(null)

  const onClick = async ()=>{
    try{
      let mykey = '4c9fddf5d55749edacd1fb72e7d3496a'
      let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + mykey;
      //let urlcategory = 'https://newsapi.org/v2/top-headlines?country=kr&&apiKey=' + mykey + 'category=' + 'business';
      let res = await axios.get(url);

      setdata(res.data.articles) 

    }catch(e){
      console.log(e)
    }
  }

  return (
    <div>
        <div>
          <button onClick={onClick}> 불러오기 </button>
        </div>
        {/* (data, null, 2): null은 초기화,  2는 space간격 */}
        { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/> }

    </div>
  );
}


export default App;
