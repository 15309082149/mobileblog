import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './user.module.scss'
import { List} from 'antd-mobile'
import { UserContactOutline,
FileOutline,
StarOutline
 } from 'antd-mobile-icons'
 import user from '../../../store/user.js'
 import javar from '../../../utils/javar.js'
import {
  UnorderedListOutline,
  SetOutline,
} from 'antd-mobile-icons'
import Loading from '../../../component/loading/loading.js'
const Message = () => {

  const userid = user((state) => state.userid) //获取用户ID
  const [me,setme] = useState({}) //设置我的信息
  const [isget,setisget] = useState(false)
  function gode() {
    navigate('/index/developing')
  }

  useEffect(() => {

    async function getuser() {                         //通过用户ID拿到用户信息
    const { data } = await javar.get('/user',{
      params: {
        id: String(userid)
      }
    })
    setme(data[0])
    setisget(true)
  }
    getuser()

  },[])


  const navigate = useNavigate() //路由

  function pushIntro() { //跳转路由
    navigate('/intro')
  }


    return (
        <div className={s.zong}>
          <Loading />
            <div className={s.back}>
        <div className={s.all}>
          <div className={s.zw}> </div>
        <div className={s.sec}>
         <List header=''>
            <List.Item prefix={<UserContactOutline />} onClick={() => pushIntro()}>
          个人信息
        </List.Item>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {gode()}}>
          联系作者
        </List.Item>
        <List.Item prefix={<FileOutline />} onClick={() => {gode()}}>
          我的评论
        </List.Item>
        <List.Item prefix={<StarOutline />} onClick={() => {gode()}}>
          我的收藏
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {navigate('/set')}}>
          设置
        </List.Item>
      </List>
      </div>
</div>
      </div>
      </div>
    )
}

export default Message