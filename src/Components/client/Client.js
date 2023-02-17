import React from 'react'

import ClientBtn from './ClientBtn';

import { useSelector } from 'react-redux';

import profile from "../../assets/images/harveyspecter.png"

export default function Client() {

  const data = useSelector(state => state.user.userList);

  const activeuser = useSelector(state => state.user.activeUser);

  console.log(activeuser)

//   console.log(data)

  return (
    <div>
        {data.map(user => {
            return <ClientBtn name={user.name} lastmsg={user.lastmsg} dp={user.dp} />
        })}
    </div>
  )
}
