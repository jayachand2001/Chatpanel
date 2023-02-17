import React from 'react'

import classes from "./User.module.css"

export default function User(props) {
  return (
    <div className={classes.container}>
        <img alt="hello" src="http://emilcarlsson.se/assets/mikeross.png" className={classes.image}/>
        <p style={{paddingLeft:"5px"}}><strong>Mike Ross</strong></p>
    </div>
  )
}
