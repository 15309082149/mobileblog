import s from './regis.module.scss'
import React, { useState } from 'react'
import { Form, Input, Button } from 'antd-mobile'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import javar from '../../utils/javar.js'
import user from '../../store/user.js'
const Regis = () => {
    const setid = user((state)=>state.setid)
  const navigate = useNavigate()
  const [ac,setac] = useState('')
  const [pa,setpa] = useState('')

  function back() {
    navigate('/login')
  }

  function setac1() {
    const {value} = document.getElementById('ac')
    setac(value)
  }


  function setpa1() {
    const {value} = document.getElementById('pa')
    setpa(value)
  }


  async function login () {
    axios({
      method: 'post',
      url: 'http://47.96.39.47:8080/regis',
      data: {
        account: String(ac),
        password: String(pa)
      }
    }).then(result=>{
      console.log(result)
       if(result.data) {
         navigate('/login')
       }
       else {
         const error = document.getElementById('notice')
         error.style.opacity = '1'
       }
    })
    console.log(String(ac))
  }

    return(
        <div className={s.all}>
        <div className={s.login}>Regis</div>
        <Form layout='horizontal' mode='card'>
        <Form.Header />
        <Form.Item label='账号'>
          <Input placeholder='请输入' onChange={()=>setac1()} id="ac"/>
        </Form.Item>
        <Form.Item label='密码'>
          <Input placeholder='请输入' onChange={()=>setpa1()} id="pa"/>
        </Form.Item>
      </Form>
      <div className={s.notice} id="notice">账号或密码错误！</div>
      <Button color='success' className={s.button} onClick={login}>注册</Button>
      <div className={s.regis} onClick={()=>{back()}}>返回登录</div>
        </div>
    )
}

export default Regis