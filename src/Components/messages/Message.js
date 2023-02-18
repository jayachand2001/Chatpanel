import React, {useState} from 'react';
import classes from "./Message.module.css"
import attachment from "../../assets/images/attachment.svg"
import send from "../../assets/images/send.svg"

export default function Message() {

  const [placeholder, setplaceholder] = useState("write your text..")

  const DynamicPlaceholder = () => {
    setplaceholder('user is typing...')
  }
  return (
    <div className={classes.messageinput}>
        <input type="text" placeholder={placeholder} />
        <img src={attachment} onClick={DynamicPlaceholder}/>
        <button className={classes.submit}><img src={send}/></button>

    </div>
  )
}
