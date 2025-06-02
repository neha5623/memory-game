import React from 'react';
import { useState } from 'react';
function Diamond() {
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <div>
        <div style={styles.diamondTop}/>
        <div style={{...styles.diamondTop,transform:"rotate( 180deg)"}}/>
        </div>
    </div>
    );
};
const styles={
   
    diamondTop:{
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 14,
    borderTopWidth:0,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "yellow",
    }
}
function FrontFace(){
    return(
    <div style={{width:'100px',height:'100px',backgroundColor:'#e13b96',display:'grid',gridTemplateColumns:'repeat(3 ,1fr)'}}>
            {Array.from({length:9},(_,i)=> <Diamond key={i} />)}
    </div>
    )
}
function BackFace({img}){
    return(
    <div>
        <img
        src={img}
        alt="card"
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '10px',
          
        }}
      />
    </div>
    )
}
export default function Block({ index, img, onClick }){
    const [flipped, setFlipped] = useState(false);
    
  
    return (
        <div  onClick={() => setFlipped(!flipped)} style={{perspective: '1000px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="innerdiv"  style={{position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',width:'100px',height:'100px',borderRadius:'10px',border:'5px solid rgb(212, 37, 142)',boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',cursor:"pointer"}}>
           <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden'
        }}>
          <FrontFace />
        </div>

        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden'
        }}>
          <BackFace img={img} />
        </div>
        </div>
        </div>
    )

}