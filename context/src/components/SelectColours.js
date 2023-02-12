/* 23-02-14 
[왼클릭 colour, 우클릭시 subcolour 색상변경]: onContextMenu (우클릭이벤트) preventDefault(메뉴열기 필요없으니까)
*/
import React from 'react';
import { ColourConsumer } from '../contexts/colour';

const colours= ['red','orange','yellow','green','blue','indigo','violet']

const SelectColours = () => {
    return (
        <div>

            <h2> *색상을 선택하세요</h2>
            <ColourConsumer>{
                ({actions})=>(
                    <div style={{display:'flex'}}>
                    {colours.map(c => (
                        <div key={c} style={{ background: c, width: '24px', height:'24px', corsor:'poniter'}}
                        onClick={()=> actions.setcolour(c)} 
                        onContextMenu={ e=>{e.preventDefault(); actions.setsubcolour(c)} }
                        />
                        ) )
                    }
                </div>
                )
            }
            </ColourConsumer>
            <hr/>

        </div>
    );
};

export default SelectColours;