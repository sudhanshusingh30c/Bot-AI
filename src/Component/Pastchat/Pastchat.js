import styles from "./pastchat.module.css";
import HistoryCard from "../Card/Historycard/Historycard";
import { useEffect, useState } from "react";


export default function Pastchats(){
const [data,setData]=useState([])
useEffect(()=>{
    let arr=JSON.parse(localStorage.getItem('prevquestion'))
    console.log(arr)
setData(arr)
},[])

return (
    
    <div className={styles.chatssession}>
        <div className={styles.heading}>
            Conservation History
        </div>
        <div style={{height:'80%',textAlign:'left',padding:"0% 2%"}}>
            <p style={{fontWeight:'650',margin:'14px 0px'}}>Today's chat</p>
 {
        data.map((res,ind)=>(
            <HistoryCard  data={res} key={ind}/>
        ))
    }
        </div>
    </div>
)
}