import React,{ useState } from 'react'
import { Form, Input, Button} from "antd"
import { login } from "../api/api"
import {useHistory} from "react-router";
export default function Login() {
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const history = useHistory()
  const handleInputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else {
      setPwd(e.target.value)
    }
  };
  const handleLogin = () => {
    login({name,pwd}).then(res => {
      if(res.code === 0 ) {
        history.replace('/home')
      }
    }).
      catch(error => {
      console.log(error)
    })
  }

  return <Form className="login-form">
    <Form.Item>
      <Input name="name" placeholder="用户名随便填" maxLength={8} onChange={handleInputChange} />
    </Form.Item>
    <Form.Item>
      <Input type="password" name="pwd" placeholder="密码随便填" maxLength={6}  onChange={handleInputChange} />
    </Form.Item>
    <label>{name} --- {pwd}</label>
    <Form.Item>
      <Button type="primary" onClick={handleLogin}>登录</Button>
    </Form.Item>
  </Form>
}
