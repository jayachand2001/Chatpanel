import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserNo, updateUserList } from '../../store/UserSlice';

import profile from "../../assets/images/harveyspecter.png"


function EventPanel() {

  const dispatch = useDispatch();

  function clickHandler(){
    const length = dispatch(getUserNo);
    console.log(length)

    const user = {
      name: `user`,
      lastmsg: "this is the last msg",
      dp: profile,
      msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
    }

    dispatch(updateUserList(user))
  }
const clickHandlerTyping = () => {
    
}
  return (
      <>
    <div><button onClick={clickHandler}>Add New user</button></div>
    <div><button onClick={clickHandlerTyping}>set user typing</button></div>
    </>
  )
}

export default EventPanel