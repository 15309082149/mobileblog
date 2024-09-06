import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './user.module.scss'
import { List,  Avatar } from 'antd-mobile'
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
  const userid = user((state) => state.userid)
  const [me,setme] = useState({})
  useEffect(() => {
    async function getuser() {                           //通过用户姓名拿到用户信息
    const { data } = await javar.get('/user',{
      params: {
        id: String(userid)
      }
    })
    setme(data[0])
  }
  getuser()
  },[me])
  const navigate = useNavigate()
  function pushIntro() {
    navigate('/intro')
  }
    return (
        <div>
            <div className={s.back}>
        <div className={s.all}>
            <List >
          <List.Item
            prefix={<Avatar src='' />}
            description={me.intro}
          >
            {me.username}
          </List.Item>
        </List>
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