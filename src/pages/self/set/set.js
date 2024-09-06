
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { List } from 'antd-mobile'
import s from './set.module.scss'
const Set = () => {
    const navigate = useNavigate()
    const back = () =>
    {
        navigate(-1)
    }
    return (
        <div className={s.back}>
            <NavBar onBack={back} className={s.navbar}>
          设置
        </NavBar>
         <List header=''>
        <List.Item  onClick={() => {}} extra='123456'>
          绑定QQ
        </List.Item>
        <List.Item  onClick={() => {navigate('/login')}} >
          退出登录
        </List.Item>
      </List>
        </div>
    )
}

export default Set