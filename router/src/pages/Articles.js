import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

/* 23-02-05
[중첩Route] :  <Outlet/>추가 : 
*/
// const Articles = () => {

//     return (
//     <>
//         <Outlet />  {/* <Route path =":id" element={<Article/>} /> */}
//         <ul>
//             <li><Link to="/articles/1">  ArticleS 1  </Link></li>
//             <li><Link to="/articles/2">  ArticleS 2   </Link></li>
//             <li><Link to="/articles/3">  ArticleS 3  </Link></li>
//         </ul>

//     </>
//     );
// };


/*
 [NavLink]: with isActive
*/
// const Articles = () => {
//     const activeStyle = { color:'green', fontSize:21}
//     return (
//     <>
//         <Outlet />  {/* <Route path =":id" element={<Article/>} /> */}
//         <ul>
//             <li><NavLink to="/articles/1" style={({isActive})=>(isActive? activeStyle: undefined )}>  ArticleS 1  </NavLink></li>
//             <li><NavLink to="/articles/2" style={({isActive})=>(isActive? activeStyle: undefined )}>  ArticleS 2  </NavLink></li>
//             <li><NavLink to="/articles/3" style={({isActive})=>(isActive? activeStyle: undefined )}>  ArticleS 3  </NavLink></li>
//         </ul>

//     </>
//     );
// };

/*
 [reFactoring]: 반복없앰 id변수로 하는 ArticeItem 생성
*/

const ArticeItem = ({id}) =>{
    const activeStyle = { color:'green', fontSize:21}
    return (
        <li><NavLink to={`/articles/${id}`} style={({isActive})=>(isActive? activeStyle: undefined )}>  ArticeItem {id}  </NavLink></li>
    )
}


const Articles = () => {
    
    return (
        <>
            <ul>
                <ArticeItem id={1} />
                <ArticeItem id={2} />
                <ArticeItem id={3} />
            </ul>
            <Outlet/>
        </>
    )
};

export default Articles;