import React, {useState, useEffect} from "react";
import axios from "axios";

interface Props {
    name: string;
  }
interface Fact{
  fact:string
  length:number
}
  
  const CatFact = () => {
    const [facts, setFacts] = useState<Fact[]>([])
    useEffect(()=>{
    axios.get('https://catfact.ninja/facts?limit=5')
    .then(res=>{
        
        setFacts(res.data.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, []) 
    
    return (
      <div>
        <h3>Cat facts from https://catfact.ninja/:</h3>
        <ul>
        {facts.map((fact)=>
        <li key= {fact.length}>{fact.fact}</li>
        )}
        </ul>
      </div>
    )
  }

  export default CatFact

