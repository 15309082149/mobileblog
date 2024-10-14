import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    useNavigate,
    useLocation,
} from 'react-router-dom'
import './index.scss'
const Index = () => {
    const navigate= useNavigate()
    const { pathname } = useLocation
    return (
        <div className='All'>
        <Outlet />     {/*二级路由出口*/}
        </div>
    )
}
export default Index