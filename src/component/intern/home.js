import React from 'react'
import Blog from './blog';
import Post from './post';
import Works from './works';


const Home = () => {
  return (
    <div>
        <Blog/>
        <Post />
        <Works />
    </div>
  )
}

export default Home;