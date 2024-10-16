import { Toast } from 'antd-mobile'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { List } from 'antd-mobile'
import s from './intro.module.scss'
import { useState,useEffect } from 'react'
import user from '../../../../store/user.js'
import javar from '../../../../utils/javar.js'
const Intro = () => {
  const [me,setme] = useState({})
  const userid = user((state) => state.userid)
  function change(e) {
    if(userid === 1) {
      Toast.show({
        content: '游客无法修改个人信息！'
      })
    }
    else {
      navigate(e)
    }
  }
  useEffect(() => {                                                 //拿到用户信息
          async function getuser() {
    const { data } = await javar.get('/user',{
      params: {
        id: String(userid)
      }
    })
    setme(data[0])
  }
  getuser()
  },[])
    const navigate = useNavigate()
    const back = () =>
    {
        navigate(-1)
    }
    return (
        <div className={s.back}>
            <NavBar onBack={back} className={s.navbar}>
          个人信息
        </NavBar>
         <List header='账号信息'>
        <List.Item  onClick={() => {change('/changename')}} extra={me.username}>
          用户姓名
        </List.Item>
        <List.Item  onClick={() => {change('/changein')}} extra={me.intro}>
          用户简介
        </List.Item>
        <List.Item  extra={me.account}>
          账号
        </List.Item>
        <List.Item  onClick={() => {change('/changepass')}} extra='点击修改'>
          修改密码
        </List.Item>
        <List.Item extra='123456'>
          绑定QQ
        </List.Item>
      </List>
      <List header='账户'>
        <List.Item  onClick={() => {}} extra={me.points}>
          积分
        </List.Item>
      </List>
        </div>
    )
}

export default Intro