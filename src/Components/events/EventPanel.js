import React from 'react'


function clickHandler(){
   alert("hello world")
  }
function EventPanel() {
  return (
    <div><button onClick={clickHandler}>Add New user</button></div>
  )
}

export default EventPanel