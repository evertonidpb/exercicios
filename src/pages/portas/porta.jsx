import styles from './Portas.module.css'
export default function  porta(props) {
// se a porta tiver sido selecionada, ele aplica o css q sobrescreve a estilização da estrutura, deixando-o c/ a cor diferente
const selecionada = props.selecionada ? styles.selecionada : styles.estrutura;

    return (
        <div className={styles.area}>
          <div className={selecionada}>
            <div className={styles.porta}>
             <div className={styles.numero}> 3</div>
             <div className={styles.macaneta}>  </div>
            </div>
          </div>
          <div className={styles.chao}> &nbsp;</div>          
        </div>
    )
}