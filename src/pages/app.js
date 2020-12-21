import React from 'react'
import {Link} from 'react-router-dom'
import './app.scss'

export default function App() {
  return <div className="container">
    <h1>学习React hooks 的小案例</h1>
    <br/>
    <Link to='/login'>去登录页</Link>
    <br/>
    <Link to='/home'>去首页</Link>
  </div>
}
