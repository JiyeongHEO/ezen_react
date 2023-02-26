/** 23-02-05  */
import NewsItem from "./NewsItem";
/** 23-02-12  */
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import React from 'react';
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {   //768이하이면...media query
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  `;
/** 샘플데이터 */
// const sampleArticle={
//   title:"제목",
//   description:"내용",
//   url:"https://google.com",
//   urlToImage:"https://via.placeholder.com/160"
// }

// function NewsList() {
//     return (
//       <NewsListBlock>
//         <NewsItem article = {sampleArticle} />
//         <NewsItem article = {sampleArticle} />
//         <NewsItem article = {sampleArticle} />
//         <NewsItem article = {sampleArticle} />
//         <NewsItem article = {sampleArticle} />
//         <NewsItem article = {sampleArticle} />
//       </NewsListBlock>
//     );
//   }

/** 실제데이터1 */
// const NewsList=()=> {
//   const [loading, setLoading] = useState(false);
//   const [articles, setArticles ] = useState(null);
  
//   useEffect(()=>{
//     const fetchData = async()=>{
//       setLoading(true)
//       try{
//         let mykey = '4c9fddf5d55749edacd1fb72e7d3496a'
//         let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + mykey;
//         const res = await axios.get(url);
//         setArticles(res.data.articles);
//       }catch(e){
//         console.log(e)
//       }
//       setLoading(false);
//     } 
//     fetchData(); //비동기일때보통양식임(함수로 따로 선언함). return자리임(초기 렌더링 후 'unmount||update'되기 전에만 호출. 함수안쓰면 매번 호출함)
//   }, [])

//   if(loading){ return  <NewsListBlock> 대기중.... </NewsListBlock>}
//   if(!articles)/*null인지 검사, 이게 없으면 속도에따라 error나와서..특히 아래처럼 map쓸때 필수 */{ return  null} 
  
//   return (
//     <NewsListBlock> 
//       {articles.map(atc => (
//         <NewsItem key={atc.url} ariticle={atc} /> 
//       ))}

//     </NewsListBlock>
//     );
//   }

/** 실제데이터2 - Category추가: query, update되야하니 category두번째인자로추가
 */
// const NewsList=( {category} )=> {
//   const [loading, setLoading] = useState(false);
//   const [articles, setArticles ] = useState(null);
  
//   useEffect(()=>{
//     const fetchData = async()=>{
//       setLoading(true)
//       try{
//         const query = category ==='all'? '': `&category=${category}` //여기
//         let mykey = '4c9fddf5d55749edacd1fb72e7d3496a'
//         //let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + mykey;
//         let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=` + mykey; //여기
//         const res = await axios.get(url);
//         setArticles(res.data.articles);
//       }catch(e){
//         console.log(e)
//       }
//       setLoading(false);
//     } 
//     fetchData();
//   }, [category]) //여기

//   if(loading){ return  <NewsListBlock> 대기중.... </NewsListBlock>}
//   if(!articles){ return  null} 
  
//   return (
//     <NewsListBlock> 
//       {articles.map(atc => (
//         <NewsItem key={atc.url} ariticle={atc} /> 
//       ))}

//     </NewsListBlock>
//     );
//   }
  

/**  [비동기hook- 커스톰hook]
 */
  const NewsList=( {category} )=> {
//여기 시작
    const [loading, response, error ] = usePromise(()=>{
      const query = category ==='all'? '': `&category=${category}`;
      let mykey = '4c9fddf5d55749edacd1fb72e7d3496a'
      let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=` + mykey; //여기
      return  axios.get(url);
    },[category])
  
    if(loading){ return  <NewsListBlock> ...대기중.... </NewsListBlock>}
    if(!response){ return  null} //error가아니라 null인것
    if(error){ return  <NewsListBlock> ...에러 발생!... </NewsListBlock> } 
    
    const {articles} = response.data; 
//여기 끝

    return (
      <NewsListBlock> 
        {articles.map(atc => (
          <NewsItem key={atc.url} ariticle={atc} /> 
        ))}
      </NewsListBlock>
      );
    }
    
  
  export default NewsList;