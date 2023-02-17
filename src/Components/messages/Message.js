import React from 'react';
import classes from "./Message.module.css"
import attachment from "../../assets/images/attachment.svg"
import send from "../../assets/images/send.svg"

export default function Message() {
  return (
    <div className={classes.messageinput}>
        <input type="text" placeholder="Write your message..." />
        <img src={attachment}/>
        <button className={classes.submit}><img src={send}/></button>
    </div>
  )
}
