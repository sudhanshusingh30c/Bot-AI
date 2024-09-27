import like from '../../../Assest/like.png';
import dislike from '../../../Assest/Dislike.png';
import profile from '../../../Assest/profile.png'
import styles from '../card.module.css';
import ai from '../../../Assest/ai.png'

export default function Currentchat({ chats }) {
    return (
        <>
            {
                chats.map((ele, ind) => (
                    <>
                    <div className={styles.displaycard} key={ind}>

                    <div className={styles.wrapper}>
                        <div className={styles.logobox}>
                            <img src={profile} alt="pic" />
                        </div>
                        <div className={styles.miniinfo}>
                            <h4>You</h4>
                            <p style={{ padding: '5px 0px' }}>{ele.question}</p>
                            <span style={{ fontWeight: '200', fontSize: 'small' }}>10:33 AM </span><span> <img src={like} alt="like" /> <img src={dislike} alt='dislike' /></span>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.logobox}>
                            <img src={ai} alt="pic" />
                        </div>
                        <div className={styles.miniinfo}>
                            <h4>Soul AI</h4>
                            <p style={{ padding: '5px 0px' }}>{ele.response}</p>
                            <span style={{ fontWeight: '200', fontSize: 'small' }}>10:33 AM </span><span> <img src={like} alt="like" /> <img src={dislike} alt='dislike' /></span>
                        </div>
                    </div>
                    </div>
                    </>
                ))
            }
        </>

    )
}