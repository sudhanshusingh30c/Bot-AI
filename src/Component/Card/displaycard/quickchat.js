import styles from '../card.module.css'

export default function Quickbox({txt,click}){
    return (
        <div className={styles.box} onClick={()=>click(txt)}>
            <h3>{txt}</h3>
            <p>Get immediate AI generated response</p>
        </div>
    )
}