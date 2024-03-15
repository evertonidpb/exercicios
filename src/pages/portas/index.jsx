import Presente from "./presente";
import Porta from "./porta";
import PortaModel from "./PortaModel";
import { useState } from "react";

export default function Home (){
       const [p1, setP1] = useState(new PortaModel(1))
     // const p1 = new PortaModel(1, false, true, false);
       const p2 = new PortaModel(2);

    return (
  
     <div style={{display: "flex"}}>
        <Porta  value={p1} onChange={novaPorta => setP1(novaPorta)} />
        <Porta  value={p2}/>
     </div>
  
        
    )
}