import styles from './Portas.module.css';
import PortaModel from './PortaModel';

interface PortaProps {
 value: PortaModel;
 onChange: (novaPorta : PortaModel) => void;

}

export default function Porta(props: PortaProps) {
  // extrai o objeto PortaModel da interface PortaProps, retornando um objeto PortaModel
  const porta = props.value;

  // se a porta tiver sido selecionada, ele aplica o css q sobrescreve a estilização da estrutura, deixando-o c/ a cor diferente
const selecionada = porta.selecionada ? styles.selecionada : styles.estrutura;
 
// ele chama a propriedade onChange do objeto porta q por sua 
const alternarSelecao = e => props.onChange(porta.alternarSelecao());
    
   return (
        
         <div className={styles.area}>
          <div className={selecionada}>
            <div className={styles.porta}>
             <div className={styles.numero}> {porta.numero}</div>
             <div className={styles.macaneta}>  </div>
            </div>
          </div>
          <div className={styles.chao}> &nbsp;</div>          
        </div>
    )
}