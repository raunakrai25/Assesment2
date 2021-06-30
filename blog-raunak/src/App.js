import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import CommentCard from './Components/commentCard'
import Axios from 'axios'

function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      await Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(({ data }) => {
          // console.log(data)
          setPost(data)
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          console.info('search successful')
        })
    }

    getPosts()
  }, [])

  const renderPosts = post.map((post, index) => {
    return <Card postDetails={post} key={index} />
  })

  return (
    <div className='App'>
      <h1>Welcome to my Blog</h1>
      <div className='container'>
        {renderPosts}
        {/*  <Card title='asf' body='adsf' />
        <CommentCard name='asf' email='harsh@gmail.com' body='adsf' />  */}
      </div> 
    </div>
  )
}

export default App
