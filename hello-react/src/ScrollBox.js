import React, { Component } from 'react';

/**
- scrollTop : 세로 스크롤바 위치(0~350)-맨아래내리면 350
- scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
- clientHeight : 스크롤이 있는 박스의 높이 (300)

 */

class ScrollBox extends Component {
    scrolltoBottom = () => {
        const { scrollHeight, clientHeight} = this.box; // 비구조화 할당
        this.box.scrollTop = '350'//scrollHeight - clientHeight;
    }

    render() {
        const style={
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto', //스크롤바 보이기 위함.
            position: 'relative',
            margin: '5px'
        };
        const innerStyle={
            height: '650px', 
            width: '100%',
            background:'linear-gradient(white, black)'
        };

        return (
            <div style={style} ref={(ref)=> {this.box = ref; } }>
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;