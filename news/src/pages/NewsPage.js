import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

/* 23-02-12 시작
category재렌더링 방지용[Routes사용]:  Location에서param만 가져오자(onSelect필요없음)   */
const NewsPage = () => {
    const params = useParams();
    const category = params.category || 'all';
    
    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;