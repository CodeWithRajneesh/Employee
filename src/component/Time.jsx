import React, { useState } from 'react'

function Time() {
    let  time = new Date().toUTCString()
    const [ ctime,setCtime]=useState(time)


    const updateTime =()=>{
          time = new Date().toUTCString()
        setCtime(time)
    }

   setInterval(updateTime, 1000);
  return (
    <div>
        <h1>{ctime}</h1>
      
    </div>
  )
}

export default Time
