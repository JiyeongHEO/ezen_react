import React from 'react';
import { useParams } from 'react-router-dom'; //여기. hook임

const data = {
    juho:{
        name:'주호',
        desc: '주호의 설명'
    },
    miju:{
        name:'미주',
        desc: '미주의 설명'
    }
}

const Profile = () => {
    const params = useParams();  //여기
    const profile = data[params.username]

    return (
        <div>
            <h1>사용자프로필</h1>
            {profile ? (
                <div><h2>{profile.name}</h2> <p>{profile.desc}</p> </div>
            ) : (<p>존재하지 않는 profile입니다.</p> )}
        </div>
    );
};

export default Profile;