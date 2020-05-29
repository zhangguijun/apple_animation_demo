import React, { Component, useState } from 'react';
const P_LENGTH = 80;

let p_arr = new Array(P_LENGTH).fill('1')
// console.log(p_arr)
const BgAttachment = (props) => {

  const [fixImg, setFixImg] = useState(false)
  return (
    <div className='bg-root'>
      <div className='content'>
        {
          p_arr.map((item, index) => {
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
      <section id='g-img' className='gImg'></section>
    </div>
  )
}

export default BgAttachment