import Logo from '../../Assest/ai.png';
import Button from '../Button/Button';
import styles from './Display.module.css'
import Quickbox from '../Card/displaycard/quickchat';
import { useEffect, useState } from 'react';
import Currentchat from '../Card/displaycard/currentchatcard';
import Inputbar from '../Inputbar/inputbar';

export default function HomeBox() {
    
    const [userhistory, setUserHistory] = useState([]);
    const [questionid, setQuestionid] = useState(1)
    const [anyquestion, setAnyquestion] = useState(false)
    const [question, SetQuestion] = useState([])

    let quicikchats = ['Hi,what is the weather', 'Hi,what is my location', 'Hi,what is the temperature', 'Hi,how are you'];

    const handleshortcut = (e) => {
        userasking(e)
      
    }
    function savechats() {

        localStorage.setItem('prevquestion', JSON.stringify(userhistory))
        alert('chat saved')
    }
    function renderchat(ques, answer) {
        setUserHistory(prev => [...prev, {
            'id': questionid,
            'question': ques,
            'response': answer,
        }])
        setQuestionid(questionid + 1)

    }

    const handletyping = (e) => {
        SetQuestion(e.target.value)
    }
    const userasking = (question) => {
        if(!question)return
        setAnyquestion(true)
        let Airesponse

        if (question.toLowerCase() === 'hi') {
            Airesponse = localStorage.getItem('hi')
        } else if (localStorage.getItem(question.slice(3))) {
            Airesponse = localStorage.getItem(question.slice(3))

        } else {
            Airesponse = "As an AI language model.I don't have the details"
        }
        renderchat(question, Airesponse)
        SetQuestion('')
    }

    return (
        < div className={styles.container} >
            <div className={styles.heading}>
                <h2>Bot AI</h2>
            </div>
            <div className={styles.subheading} id={anyquestion ? styles.hide : 'logo'} >
                <h3>How Can I Help You Today?</h3>
                <img width='20' height={5} src={Logo} alt="" />
            </div>
            {anyquestion ? (
                <div className={styles.chats}>
                    <Currentchat chats={userhistory} />
                </div>

            ) : (
                <div className={styles.shortcut}>
                    {
                        quicikchats.map((e, ind) => (

                            <Quickbox key={ind} click={handleshortcut} txt={e} />)

                        )
                    }
                </div>
            )}



             <Inputbar value={question} handletype={handletyping} clickask={userasking} save={savechats}/>
           
        </div>
    )
}