import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './user.module.scss'
import { List,  Avatar, Skeleton } from 'antd-mobile'
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
const Message = () => {

  const userid = user((state) => state.userid) //获取用户ID
  const [me,setme] = useState({}) //设置我的信息
  const [isget,setisget] = useState(false)


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
            <div className={s.back}>
        <div className={s.all}>
          <div id="show" className={s.list}>
            <List>
          <List.Item
            prefix={<Avatar src='' />}
            description={isget ? me.intro : 'null'}
          >
            {/* <div id="load">
        <Skeleton animated className={s.customSkeleton}/>
        </div> */}
            { isget ? me.username : <Skeleton animated className={s.customSkeleton}/>}
          </List.Item>
        </List>
        </div>
        <div className={s.sec}>
         <List header=''>
            <List.Item prefix={<UserContactOutline />} onClick={() => pushIntro()}>
          个人信息
        </List.Item>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          联系作者
        </List.Item>
        <List.Item prefix={<FileOutline />} onClick={() => {}}>
          我的评论
        </List.Item>
        <List.Item prefix={<StarOutline />} onClick={() => {}}>
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