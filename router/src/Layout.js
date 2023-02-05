import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

/**23-02-05 
 *  [중첩Route]: header영역 유지됨,
 *  [useNavigate] :navigate, goBack, goArticles추가 -> {replace: 'true'}추가: 해당기능은 기록남지않아서 이리로 뒤로가기불가
 */
const Layout = () => {
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1)
    }
    const goArticles = ()=>{
        navigate('/articles', {replace: 'true'})
    }
    
    return (
        <div>
           
            <header style={{background:'lightgray', padding:16, fontSize:24 }}> header 
                <button onClick={goBack}> 뒤로가기 </button>
                <button onClick={goArticles}> articles목록 </button>
            </header>
            <main>
                <Outlet/> {/* <Home/>, <About/>, <Profile/> */}
            </main>
            
        </div>
    );
};

export default Layout;