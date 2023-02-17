import React from 'react'

import classes from "./Main.module.css"

import User from '../User/User'
import Client from '../client/Client'
import Message from '../messages/Message'
import Clientprofile from '../clientprofile/Clientprofile'
import Clientchat from '../clientchat/Clientchat'

export default function Main() {
  return (
    <div className={classes.container}>
        <div className={classes.leftsidebar}>
            <User />
            <Client />
        </div>
        <div className={classes.rightsidebar}>
            <Clientprofile/>
            <Clientchat/>
            <Message/>
        </div>
    </div>
  )
}
