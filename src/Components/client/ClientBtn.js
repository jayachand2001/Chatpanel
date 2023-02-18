import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../store/UserSlice';

import classes from "./ClientBtn.module.css"

export default function ClientBtn(props) {

  const dispatch = useDispatch()

  const handleClick = () => {
    setOnline(online => !online)
  }

  function clickHandler(){
    

    dispatch(setActiveUser(props.name))
  }
  const [online, setOnline] = useState(true)
  let [count,setCounter] = useState(0)

  const  increaseCounter = () => {
    setCounter(count++)
  }

  return (
    <div className={classes.container} onClick={clickHandler}>
        <span className={online?classes.contactstatusonline : classes.contactstatusoffline} onClick={handleClick}></span>
        <div className={classes.image}>
            <img src={props.dp} />
        </div>
        <div>
            <p><strong>{props.name}</strong></p>
            <span><p>{props.lastmsg}</p><p className={classes.counter} onClick={increaseCounter}>{count}</p></span>
          
        </div>
    </div>
  )
}
