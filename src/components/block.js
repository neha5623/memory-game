import React from 'react';
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
export default function Block(){
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{backgroundColor:'#e13b96',width:'100px',height:'100px',borderRadius:'10px',border:'5px solid rgb(212, 37, 142)',display:'grid',gridTemplateColumns:'repeat(3 ,1fr)',boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',cursor:"pointer"}}>
        
        {Array.from({length:9},(_,i)=> <Diamond key={i} />)}
        
        </div>
        </div>
    )

}