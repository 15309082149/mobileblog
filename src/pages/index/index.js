import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    useNavigate,
    useLocation,
} from 'react-router-dom'
import './index.scss'
import Topbar from '../../component/topbar/topbar'
const Index = () => {
    const navigate= useNavigate()
    const { pathname } = useLocation
    return (
        <div className='All'>
            <Topbar></Topbar>
        <Outlet />     {/*二级路由出口*/}
        </div>
    )
}
export default Index