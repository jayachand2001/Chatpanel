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

  return (
    <div className={classes.container} onClick={clickHandler}>
        <span className={online?classes.contactstatusonline : classes.contactstatusoffline} onClick={handleClick}></span>
        <div className={classes.image}>
            <img src={props.dp} />
        </div>
        <div>
            <p><strong>{props.name}</strong></p>
            <p>{props.lastmsg}</p>
          
        </div>
    </div>
  )
}
