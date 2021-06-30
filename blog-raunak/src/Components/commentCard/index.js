import React from 'react'
import './style.css'

const CommentCard = (props) => {
  const commentDetails = props
  // console.log(commentDetails)
  return (
    <div className='commentCard'>
      <div className='title'>{commentDetails.name}</div>
      <div className='body'>
        {commentDetails.email} <br /> {commentDetails.body}{' '}
      </div>
    </div>
  )
}

export default CommentCard
