import styles from './Historycard.module.css';
import userpic from '../../../Assest/profile.png';
import aipic from '../../../Assest/ai.png';
import like from '../../../Assest/like.png';
import dislike from '../../../Assest/Dislike.png';

export default function HistoryCard({ data }) {
    return (
        <>
            <div className={styles.wrapperhistory}>
                
                    <div className={styles.userres} style={{marginBottom:'20px'}}>
                        <div><img src={userpic} alt="userpic" /></div>
                        <div className={styles.userinfo}>
                            <h3>YOU</h3>
                            <p style={{marginBottom:'11px'}}>{data.question}</p>
                            <p style={{marginTop:'5px',fontWeight:'300'}}>10:33</p>
                        </div>
                    </div>
                    <div className={styles.userres}>
                        <div><img style={{borderRadius:"50%"}} src={aipic} alt="aipic" /></div>
                        <div className={styles.userinfo}>
                            <h3>Soul AI</h3>
                            <p style={{marginBottom:'11px'}}>{data.response}</p>
                            <p style={{marginTop:'5px',fontWeight:'300'
                            }}><span >10:33</span><span><img src={like} alt="like" /></span><span><img src={dislike} alt='dislike' /></span></p>
                        </div>
                    </div>
               
            </div>
        </>
    )
}