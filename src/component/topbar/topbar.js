 import { UnorderedListOutline, CloseOutline } from 'antd-mobile-icons'
import React, { useEffect, useState, useRef } from 'react'
 import { Popup,Dropdown } from 'antd-mobile'
 import s from './topbar.module.scss'
 const Topbar = () => {
    function setv(e) {
        document.getElementById("pop").style.opacity = e
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
          <div style={{height: 7 + '%'}}></div>
          <div className={s.pop} id="pop">
            <div className={s.close}>
                <div className={s.closeicon} onClick={()=>{setv(0)}}> <CloseOutline /></div>
            </div>
            <div className={s.items}>
                <div className={s.item}>About Clarca</div>
                <div className={s.item}>My blogs</div>
                <div className={s.item}>About this website</div>
                <div className={s.item}>About me</div>
            </div>
          </div>
          </div>
    )
 }
 export default Topbar