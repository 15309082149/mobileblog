import { NavBar, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import javar from '../../../../utils/javar'
import s from './changename.module.scss'
import user from '../../../../store/user.js'
const ChangeName = () => {
    function finish() {
      if(input.current.value) {                       //判断输入框是否为空，不为空再发送请求
        javar.get('/changename',{
          params: {
            id: String(userid),
            username: String(input.current.value)
          }
        }).then(result => {
          if(result.data) {                           //判断是否修改成功
            Toast.show({
                icon: 'success',
                content: '修改成功',
              })
              setTimeout(()=>{
                navigate(-1)
              },400)
              
          }
          else {
            Toast.show({
                icon: 'fail',
                content: '修改失败',
              })
          }
        })
      }
      else {
        Toast.show('不能输入空内容！')
      }
    }
    const input = useRef()
    const navigate = useNavigate()
    const back = () =>
    {
        navigate(-1)
    }
    const userid = user((state) => state.userid)
    const right = (
      <div className={s.right} onClick={()=>finish()}>完成</div>
    )

    return (
        <div className={s.back}>
            <NavBar onBack={back} className={s.navbar} right={right}>
          修改用户名称
        </NavBar>
        <input className={s.input} placeholder='请输入' ref={input}></input>
        </div>
    )
}
export default ChangeName