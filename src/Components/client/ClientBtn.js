import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../store/UserSlice';

import classes from "./ClientBtn.module.css"

export default function ClientBtn(props) {

  const dispatch = useDispatch()


  function clickHandler(){
    dispatch(setActiveUser(props.name))
  }

  return (
    <div className={classes.container} onClick={clickHandler}>
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
