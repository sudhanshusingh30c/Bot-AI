import { useEffect, useState } from 'react';
import Logo from '../../Assest/ai.png';
import Edit from '../../Assest/edit.png';
import Button from '../Button/Button';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom'


export default function Sidebar (){
    

    
    return (
        <>
        <div className={styles.side}>
            <div className={styles.wrapperins}>
            <Link to={'/'}  >
                <img src={Logo} width={40} style={{borderRadius:'50%'}} alt="Logo" />
                <span>New Chat</span>
                <img src={Edit} alt="edit" />
            </Link>
            </div>
            <div className={styles.wrapper2} >
            <Link to={'/history'}  >
             <Button text='Past Conversations' />
            </Link>
            </div>
        </div>
        </>
    )
}