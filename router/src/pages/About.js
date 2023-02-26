import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

/** 23-02-05
    # useLocation : 현재보고있는 page정보 객체 반환. eg) /about?detail=true&mode=1
- pathname : 현재 주소의 경로(쿼리스트링 제외)
- search: 맨앞의 ? 문자를 포함한 쿼리스트링 값
- hash : 주소의 # 문자열 뒤의 값(주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅 사용할 때 쓰는 해시 라우터에서 사용한다.
- state : 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
- key : location 객체의 고유값, 초기에는 default이며 페이지가 변경될 때 마다 고유의 값이 생성됨.

 */

// const About = () => {
//     const location = useLocation(); //[QueryString]

//     return (
//         <div>
//             <h1>ABOUT</h1>
//             <p>this is for Router 어쩌고저쩌고</p>
//             <p> ===================QueryString============================ </p>
//             <p>QueryString: {location.search} </p>   {/* eg) ?어쩌고, ?detail=true&mode=1 */}
            
//         </div>
//     );
// };


/** 
 *  [useSearchParams]
 *   .../about?detail=true&mode=1
 */
const About = () => {
    const [searchParams, setsearchParams] = useSearchParams();
    const detail = searchParams.get('detail')
    const mode = searchParams.get('mode')

    const onToggleDetail=()=>{
        setsearchParams({ mode, detail: detail ==='true'? false: true })
    }
    const onIncreaseMode=()=>{
        const nextMode = (mode===null || mode==='null')?  1: parseInt(mode)+1
        setsearchParams({ mode:nextMode, detail })
    }
          
    
    return (
        <div>
            <h1>ABOUT</h1>
            <p>this is for Router 어쩌고저쩌고</p>
            <p> detail: {detail} </p>
            <p> mode: {mode} </p>

            <button onClick ={onToggleDetail}> Toggle Detail </button>
            <button onClick ={onIncreaseMode} > Mode +1 </button>

            
      
            
        </div>
    );
};

export default About;