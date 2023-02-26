import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles'; //중첩Route
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

/**
 * 2023-01-29 시작 - Single Page App~
 * yarn add react-router-dom -> package.json확인(지금 6버전이다!버전따라 에러가능성있음!)
 */

/**
 * 2023-02-05 시작 - Sing Page App~ 이어서. 
 * [Router]: 한 page안에 모듈화시키는거
 *  index.js : <BrwoserRouter>추가([history]객체이자 API가 포함되어있다, 새page불러오지않고, 주소변경및경로 관련 정보가짐.)
 * [Home, About 페이지 생성]
 * pages폴더 -> js생성 -> App.js: <Routes><Route path ="주소규칙" element={보여줄comp~net JSX} /> 반복.. </Routes>
 * -> 또는 <Route ~ component={보여줄comp~net} /> 
 * -> 사이트(page)이동할 [Link]component. [history]API이용해 주소경로만 바꿀수있음 <Link to="경로">이름</Link> vs <a>:새로불러옴 : Home.js
 * -> [url 파라미터] 주로 'id or 이름'사용하여 특정 data조회,[useParams],여러개면-/profiles/:username/:field : App.js, Profile.js, Home.js
 * vs [QueryString] 조건식적용. 보통 검색site에서. 키워드검색, 정렬방식 등 옵션전달. [useLocation] -> parsing위한 [useSearchParams] key값받아 value가져옴, 6버전부터 : About.js 
 * [중첩Route] Articles에서 param받아 Article로 보여지게. <Article>은 <Articles>무조건 거쳐야함 : Articles.js, Article.js, Home.js , Layout.js 
 *  
 * 
 */
// function App() {

//   return (

//     <Routes> 
//       <Route path ="/" element={<Home/>} /> 
//       <Route path ="/about" element={<About/>} />
//       <Route path ="/profiles/:username" element={<Profile/>} />
//        {/*=================중첩Route 시작===============*/}
//       <Route path ="/articles" element={<Articles/>} /> 
//       <Route path ="/articles/:id" element={<Article/>} /> 
//     </Routes>
//   );
// }

/*
 [중첩Route], Articles에서 param받아 Article로 보여지게. <Article>은 <Articles>무조건 거쳐야함 -> 하위로 넣음  -> [Outlet]추가  : Articles.js,  Article.js, Home.js
 */
// function App() {

//   return (

//     <Routes> 
//       <Route path ="/" element={<Home/>} /> 
//       <Route path ="/about" element={<About/>} />
//       <Route path ="/profiles/:username" element={<Profile/>} />
//        {/*=================중첩Route:자식으로 ===============*/}
//       <Route path ="/articles" element={<Articles/>} >  
//         <Route path =":id" element={<Article/>} />
//       </Route>
//     </Routes>
//   );
// }

/*
 [중첩Route]: Layout.js사용. header영역 유지됨
 */
// function App() {
//   return (
//     <Routes> 
//       <Route element={<Layout/>}>
//         <Route path ="/" element={<Home/>} /> 
//         <Route path ="/about" element={<About/>} />
//         <Route path ="/profiles/:username" element={<Profile/>} />
//       </Route>
//        {/*=================중첩Route:자식으로 ===============*/}
//       <Route path ="/articles" element={<Articles/>} >  
//         <Route path =":id" element={<Article/>} />
//       </Route>
//     </Routes>
//   );
// }

/**
 * [Route - Index라는 prop]: path='/'와 동일. 즉 root구나.
  # [useNavigator]: <Link>사용하지 않고 다른 page로 이동할때, 앞/뒤로가기 : Layout.js
  # [NavLink]: Link에서 사용하는 경로 == 현재Route경로 이면 특정 style적용시킴. <NavLink style={({isActive}) => (isActive? 'active' : undefined)} /> : Articles.js
  # [reFactoring], id변수처리, NavLink는틀 -> <ArticeItem> 생성 : Articles.js
  # <NotFound/>*asterisk는 (wildCard-위의 path외에는 모두 여기로와라, 따라서 맨하위에 있어야함): NotFound.js, App.js에 추가
  # <Navigate>: page Redirect 할때 사용. eg) 로그인필요한 페이지 등 : MyPage.js, Login.js
  Route 끝 

  [외부API활용해 News카테고리 만들기]: news폴더로!!!
*/
function App() {
  return (
    <Routes> 
      <Route element={<Layout/>}>
        <Route index ="/" element={<Home/>} />  {/*여기*/}  
        <Route path ="/about" element={<About/>} />
        <Route path ="/profiles/:username" element={<Profile/>} />
      </Route>
      <Route path ="/articles" element={<Articles/>} >  
        <Route path =":id" element={<Article/>} />
      </Route>

      <Route path ="/login" element={<Login/>} />
      <Route path ="/mypage" element={<MyPage/>} />

      <Route path ="*" element={<NotFound/>} />
    </Routes>
  );
}




export default App;
