import React from 'react'
import './style.css'

const Card = (props) => {
  const postDetails = props
  // console.log(postDetails)
  return (
    <div className='card'>
      <div className='title'>{postDetails.postDetails.title}</div>
      <div className='body'>{postDetails.postDetails.body}</div>
    </div>
  )
}

export default Card
