import Presente from "./presente";
import Porta from "./porta";

export default function index (){
    return (
  
     <div style={{display: "flex"}}>
        <Porta selecionada={true} />
        <Porta selecionada={false}/>
     </div>
  
        
    )
}