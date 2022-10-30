import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">Successful Blog: You're only a stranger once</span>
      {/* <span className="headerTitleLg">BLOG</span> */}
    </div>
    <img
      className="headerImg"
      style={{objectFit:"cover", borderRadius:"2px"}}
      src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt=""
    />
  </div>
  )
}

export default Header