//  导航栏
 import { UnorderedListOutline, CloseOutline } from 'antd-mobile-icons'
import React, { useEffect, useState, useRef } from 'react'
 import { Popup,Dropdown } from 'antd-mobile'
 import { useNavigate } from 'react-router-dom'
 import s from './topbar.module.scss'
 import Theme from '../theme/theme'
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
        }                  //控制弹出层的可见，使用visibility属性是防止其zIndex太高挡住下面的元素使其无法点击，opacity属性是为了消失时transition生效，实现自然过渡
    }
    return (
        <div className={s.all}>
        <div className={s.top}>
            <div className={s.me}>
                <div className={s.img}><img alt="error" src={require('../../img/ava.png')} className={s.avator}></img></div>
                <div className={s.toptext}>Clarca</div>
            </div>
            <div className={s.metopright}>
                <div className={s.item} onClick={()=>{navigate('/index/aboutme');setv(0)}}>About Clarca</div>
                <div className={s.item} onClick={()=>{navigate('/index/blogs');setv(0)}}>My blogs</div>
                <div className={s.item} onClick={()=>{navigate('/index/projects');setv(0)}}>Projects</div>
                <div className={s.item} onClick={()=>{navigate('/index/vfxli');setv(0)}}>Special vfxs</div>
                <div className={s.item} onClick={()=>{navigate('/index/aboutweb');setv(0)}}>About website</div>
                <div className={s.item}>主题切换<Theme></Theme></div>
                {/* <div className={s.item} onClick={()=>{navigate('/index/user');setv(0)}}>About me</div> */}
            </div>
            <div className={s.topright} onClick={() =>setv(1)}>
                <UnorderedListOutline></UnorderedListOutline>
            </div>
          </div>
          <div style={{height: 70 + 'px'}}></div>
          <div className={s.pop} id="pop">
            <div className={s.close}>
                <div className={s.closeicon} onClick={()=>{setv(0)}}> <CloseOutline /></div>
            </div>
            <div className={s.items}>
                <div className={s.item} onClick={()=>{navigate('/index/aboutme');setv(0)}}>About Clarca</div>
                <div className={s.item} onClick={()=>{navigate('/index/blogs');setv(0)}}>My blogs</div>
                <div className={s.item} onClick={()=>{navigate('/index/projects');setv(0)}}>Projects</div>
                <div className={s.item} onClick={()=>{navigate('/index/vfxli');setv(0)}}>Special vfxs(一些CSS特效)</div>
                <div className={s.item} onClick={()=>{navigate('/index/aboutweb');setv(0)}}>About this website</div>
                {/* <div className={s.item} onClick={()=>{navigate('/index/user');setv(0)}}>About me</div> */}
                <div className={s.item}>主题切换<Theme></Theme></div>
            </div>
          </div>
          </div>
    )
 }
 export default Topbar