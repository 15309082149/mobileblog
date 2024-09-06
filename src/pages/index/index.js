import React from 'react'
import {  TabBar } from 'antd-mobile'
import { Outlet } from 'react-router-dom'
import {
    useNavigate,
    useLocation,
} from 'react-router-dom'
import './index.scss'
import {
  AppOutline,
  AddOutline,
  UserOutline
} from 'antd-mobile-icons'
const Index = () => {
    const tabs = [
    {
      key: '/index/layout',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/index/function',
      title: '组件',
      icon: <AddOutline />
    },
    {
      key: '/index/user',
      title: '个人中心',
      icon: <UserOutline />
    }
  ]
    const navigate= useNavigate()
    const { pathname } = useLocation
    return (
        <div className='All'>
            <div className='bottom-guard'>
        <TabBar activeKey={pathname} onChange={value => navigate(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
          ))}
        </TabBar>
        </div>
        <Outlet />     {/*二级路由出口*/}
        </div>
    )
}
export default Index