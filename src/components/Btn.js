import styles from './Btn.module.css'

function Btn({text}){
    return(
        <input 
        className={styles.btn}
        type="submit"
        value={text}
        />        
    )
}

export default Btn