import React from 'react';
import Block from './block.js'
export default function box(){
    return (
        <div style={{backgroundColor:'#ea4da3ac',width:'500px',height:'500px',borderRadius:'10px',display:'grid',gridTemplateColumns:'repeat(4 ,1fr)',gap:' 20px',padding: '20px'}}>
          {Array.from({ length: 16 }, (_, i) => <Block key={i} />)}
        </div>
    )

}