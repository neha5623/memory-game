import React ,{useState,useEffect} from 'react';
import Block from './block.js'
import blueberry from './assets/blueberry.jpg';
import bluecup from './assets/bluecup.jpg';
import choco from './assets/choco.jpg';
import chocolava from './assets/chocolava.jpg';
import chocoroll from './assets/chocoroll.jpg';
import chocosweet from './assets/chocosweet.jpg';
import cinnamonroll from './assets/cinnamonroll.jpg';
import cookie from './assets/cookie.jpg';
import croissant from './assets/croissant.jpg';
import donut from './assets/donut.jpg';
import heart from './assets/heart.jpg';
import macaron from './assets/macaron.jpg';
import pinkcup from './assets/pinkcup.jpg';
import vancho from './assets/vancho.jpg';
import vanillacake from './assets/vanillacake.jpg';
import waffle from './assets/waffle.jpg';

function getIndices(){
    const indices=[];
    while(indices.length<8){
      const rand=Math.floor(Math.random()*16);
      if(!indices.includes(rand)){
        indices.push(rand);
      }
    }
    console.log(indices)
    return indices;
}

const img = [
  blueberry,
  bluecup,
  choco,
  chocolava,
  chocoroll,
  chocosweet,
  cinnamonroll,
  cookie,
  croissant,
  donut,
  heart,
  macaron,
  pinkcup,
  vancho,
  vanillacake,
  waffle
];

function ImageSel(getIndices){
  const indice=getIndices();
  const selectedImage=indice.map(index=>img[index]);

  console.log(selectedImage);
  return selectedImage
}
function shuffleArray(array){
  let i;
  for(i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}


export default function box(){
    const [cards, setCards] = useState([]);
    const [matched,setMatched]=useState([]);
    const [flipped,setFlipped]=useState([]);
    const [disabled,setDisabled]=useState(false);
    useEffect(() => {
      const selectedImage=ImageSel(getIndices);
      const pairedImage=[...selectedImage,...selectedImage].map((img,index)=>({
        id:index,
        img,
      }));
      setCards(shuffleArray(pairedImage));
    },[]);
    useEffect(() => {
      if(flipped.length === 2){
        setDisabled(true);
        if(flipped[0].img===flipped[1].img){}

      }
    },[]);
    return (
      <div>
        <div style={{backgroundColor:'#ea4da3ac',width:'500px',height:'500px',borderRadius:'10px',display:'grid',gridTemplateColumns:'repeat(4 ,1fr)',gap:' 20px',padding: '20px'}}>
          {Array.from({ length: 16 }, (_, i) => <Block key={i} index={i} img={shuffled[i]} onClick={() => flip(shuffled[i])}/>)}         
        </div>
      </div>
    )

}