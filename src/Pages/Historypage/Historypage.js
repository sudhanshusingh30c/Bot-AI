import styles from './History.module.css';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Pastchats from '../../Component/Pastchat/Pastchat';
import { useState } from 'react';


export default function HistoryPage(){
    const [showdata,setShowdata]=useState(localStorage.getItem('prevquestion'))
    return (
        <div style={{display:'flex'}}>
            <Sidebar />
            {showdata?  <Pastchats /> :'' }
        </div>
    )
}