import dataJson from "../api/dataJson.json";
import CardList from "./CardList";


const Name = "Queee";
const Rating = 2;
const Summary = "Jorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolorum est quasi veniam dignissimos error dicta aliquid at quidem libero nihil nulla tempora facere unde inventore dolorem nemo, placeat impedit!";

const years = () =>{
  const year = "2020";
  return year;
}

const age =20;
let watchNow = "Not for kids";
if(age>=18) watchNow = "Watch Now";
  
const NetFlixCard = ()=>{
  return(
    <ul className="grid grid-three-cols">
        {dataJson.map((curEle) => {
            return (
            <CardList data ={curEle} key={curEle.id} />
        )})}
    </ul>
   
  )
}
export default NetFlixCard;