import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./home.css"
import { useEffect } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  
  useEffect(() =>{
    const fetchPost = async() =>{
      const res = await axios.get("http://localhost:5000/api/posts/"+search)
      setPosts(res.data);
    }
    fetchPost()
  },[search])
  
  return (
    <>
        <Header />
        <div className='home'>
            <Posts posts={posts} />
            <Sidebar />
        </div>
    </>
  )
}

export default Home