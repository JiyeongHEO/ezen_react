import './App.css';
import axios from '../node_modules/axios/index';
import { useCallback, useState } from 'react';
import React from 'react';  /*<23-02-12> 시작*/
import NewsList from './components/NewsList';  
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';



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
 * #News: https://newsapi.org/,  apikey: 4c9fddf5d55749edacd1fb72e7d3496a -> 가져올것(title, description, url, urlToImage),
 * 기사내용 비동기로 가져온다(순서대로nono)
-> style용:  yarn add styled-components ->components폴더에 NewsList.js, NewsItem.js 추가  
 
<23-02-12> 시작
 * NewsItem.js 작성 ->  NewsList.js작성
 */
// function App() {
//   const [data, setdata] = useState(null)

//   const onClick = async ()=>{
//     try{
//       let mykey = '4c9fddf5d55749edacd1fb72e7d3496a'
//       let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + mykey;
//       //let urlcategory = 'https://newsapi.org/v2/top-headlines?country=kr&&apiKey=' + mykey + 'category=' + 'business';
//       let res = await axios.get(url);

//       setdata(res.data.articles) 

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
 -> [카테고리]:Categories.js -> [onSelect]기능 - Categories.js : {css}추가, { onSelect , category} 받음 ->
 NewsList.js: query추가, update되야하니 category두번째인자로추가


 */
// const App = () => {
//   const [category, setcategory] = useState('all')
//   const onSelect = useCallback( c => setcategory(c), []) //select마다 실행하니까 재사용되는hook사용
  
//   return <>
//     <Categories category={category} onSelect={onSelect}/>
//     <NewsList category={category}/>
//     </>
// };

/**
* category재렌더링 방지용[Routes사용]: yarn add react-router-dom ->index.js -> NewsPage.js추가: Location에서param만 가져오자(onSelect필요없음) -> Categories.js: Navlink로, props대신 &.active, to=어쩌고 ->재시작 
 */
/**
* [비동기hook- 커스톰hook]: lib폴더 -> usePromise.js  -> NewsList.js에서 사용
 */
const App = () => {
  
  return (
  <Routes>
    <Route path="/" element ={<NewsPage/>} />
    <Route path="/:category" element ={<NewsPage/>} />
  </Routes>
  )
};

/**context 폴더로 이동! */

export default App;