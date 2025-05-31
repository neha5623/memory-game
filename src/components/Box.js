import React from 'react';
import Block from './block.js'
export default function box(){
    return (
        <div style={{backgroundColor:'#ecc8bb',width:'500px',height:'500px',borderRadius:'50px',display:'grid',gridTemplateColumns:'repeat(3 ,1fr)',gap:' 20px',padding: '20px',}}>
          {Array.from({ length: 9 }, (_, i) => <Block key={i} />)}
        </div>
    )

}