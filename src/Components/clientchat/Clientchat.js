import React from 'react';

import { useSelector } from 'react-redux';
import classes from "../clientchat/Clientchat.module.css"

export default function Clientchat() {

    const active = useSelector(state => state.user.activeUser);

    console.log(active.msg)

    active.msg.map(msg => {
        if(msg.type === "reply"){
            console.log("this si a reply")
        }
        else{
            console.log("this si a reply reply")
        }
    })

  return (
    <div className={classes.chat}>
        <div className={classes.subChat}>
        {active.msg.map(msg => {
            if(msg.type === "reply"){
                return <p className={classes.message}>{msg.text}</p>
            }else{
                return <p className={classes.reply}>{msg.text}</p>
            }
                
            
        })}
        </div>
    </div>
  )
}
