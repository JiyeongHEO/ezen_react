import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>HOME</h1>
            <p>가장 먼저 보이는 js</p>
            <ul>
                <li><Link to="/about"> - About..</Link></li>
                <p>===================== Profile ========================</p>
                <li><Link to="/profiles/juho">  Juho 프로필  </Link></li>
                <li><Link to="/profiles/miju">  Miju프로필  </Link></li>
                <li><Link to="/profiles/void">  존재하지않는 프로필  </Link></li>
                <p>===================== 중첩Route =======================</p>
                <li><Link to="/articles">  게시글목록 </Link></li>
            </ul>
            
        </div>
    );
};

export default Home;