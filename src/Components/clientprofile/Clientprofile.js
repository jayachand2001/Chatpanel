import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../clientprofile/Clientprofile.module.css'

export default function Clientprofile() {


  const activeuser = useSelector(state => state.user.activeUser);

  return (
    <div className={classes.profile}>
        <img src={activeuser.dp}/>
        <p>{activeuser.name}</p>
    </div>
  )
}
