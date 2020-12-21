import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { Table} from "antd"
import { getData } from "../api/api"
import "./home.scss"
export default function Home() {
  const [data, setData] = useState([])
  const columns = [
    {
      title: '地区',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Java',
      dataIndex: 'java',
      key: 'java',
    },
    {
      title: 'PHP',
      dataIndex: 'php',
      key: 'php',
    },
    {
      title: 'Node',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: 'Js',
      dataIndex: 'js',
      key: 'js',
    },
    {
      title: 'Python',
      dataIndex: 'python',
      key: 'python',
    },
  ]
  useEffect(() => {
    getData().then(res => {
      if(res.code === 0) {
        setData(res.data)
      }
    })
  },[])
  return <div className="home">
    <h1>语言大数据报告（假的）</h1>
    <div className="wrap">
      <div className="nav">
        <a className="checked">语言动态</a>
        <a>语言地图</a>
        <a>语言热搜</a>
        <a>语言播报</a>
      </div>
      <p>数据纯属虚构</p>
      <Table dataSource={data} columns={columns} bordered pagination={false} />
      <br />
      <Link to="/">去首页</Link>
    </div>
  </div>;
}
