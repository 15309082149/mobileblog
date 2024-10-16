 import { UnorderedListOutline, CloseOutline } from 'antd-mobile-icons'
import React, { useEffect, useState, useRef } from 'react'
 import { Popup,Dropdown } from 'antd-mobile'
 import { useNavigate } from 'react-router-dom'
 import s from './topbar.module.scss'
 const Topbar = () => {
    const navigate = useNavigate()
    function setv(e) {
        const p = document.getElementById("pop")
        if(e === 1) {
            p.style.visibility = 'visible'
            p.style.opacity = 1
        }
        else {
            p.style.visibility = 'hidden'
            p.style.opacity = 0
        }
    }
    return (
        <div className={s.all}>
        <div className={s.top}>
            <div className={s.me}>
                <div className={s.img}><img alt="error" src={require('../../img/ava.png')} className={s.avator}></img></div>
                <div className={s.toptext}>Clarca</div>
            </div>
            <div className={s.topright} onClick={() =>setv(1)}><UnorderedListOutline /></div>
          </div>
          <div style={{height: 70 + 'px'}}></div>
          <div className={s.pop} id="pop">
            <div className={s.close}>
                <div className={s.closeicon} onClick={()=>{setv(0)}}> <CloseOutline /></div>
            </div>
            <div className={s.items}>
                <div className={s.item} onClick={()=>{navigate('/index/aboutme');setv(0)}}>About Clarca</div>
                <div className={s.item} onClick={()=>{navigate('/index/blogs');setv(0)}}>My blogs</div>
                <div className={s.item} onClick={()=>{navigate('/index/aboutweb');setv(0)}}>About this website</div>
                <div className={s.item} onClick={()=>{navigate('/index/user');setv(0)}}>About me</div>
            </div>
          </div>
          </div>
    )
 }
 export default Topbar