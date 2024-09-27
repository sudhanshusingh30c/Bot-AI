import styles from './input.module.css';
import Button from '../Button/Button';

export default function Inputbar({value,handletype,clickask,save}){

    
    return (
        <div className={styles.userinput}>
                <input type="text" name="userinp" value={value} onChange={handletype} />
                <div className={styles.btnbox} >
                    <div onClick={() => clickask(value)}><Button text='Ask' /></div> <div onClick={save}>< Button text='Save' /></div>
                </div>
            </div>
    )
}