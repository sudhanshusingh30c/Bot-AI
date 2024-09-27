import Sidebar from "../../Component/Sidebar/Sidebar";
import HomeBox from "../../Component/Displaybox/Displayscreen";
import styles from './Home.module.css'
import { useEffect } from "react";
export default function HomePage(){
    useEffect(()=>{

        localStorage.setItem('what is the weather',"It's raining outside")
        localStorage.setItem('what is my location','You are in Delhi right now')
        localStorage.setItem('what is the temperature','Temperature is 45 degree celcus')
        localStorage.setItem('how are you','I am good,thanks for asking')
        localStorage.setItem('hi','Hi There.How can I assist you today?')
        localStorage.setItem('Hi!','Hi There.How can I assist you today?')

    },[])
    return (
        <div style={{display:'flex'}}>
            <Sidebar />
            <HomeBox />
        </div>
    )
}