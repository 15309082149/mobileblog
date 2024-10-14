
import React, { useEffect, useState, useRef } from 'react'
import s from './aboutme.module.scss'
import { UnorderedListOutline } from 'antd-mobile-icons'
import Topbar from '../../component/topbar/topbar'
import Card from '../../component/card/card'
const Aboutme = () => {
    // const now = new Date();

    // const year = now.getFullYear();
    // const month = ('0' + (now.getMonth() + 1)).slice(-2);
    // const day = ('0' + now.getDate()).slice(-2);
    // const hours = ('0' + now.getHours()).slice(-2);
    // const minutes = ('0' + now.getMinutes()).slice(-2);
    // const seconds = ('0' + now.getSeconds()).slice(-2);

    // const formattedTime = year + "-" + month + "-"+ day + "  " + hours + ":" + minutes + ":"+ seconds;
    const [time,settime] = useState()
    useEffect(()=> {
        const t = setInterval(()=>{
          const now = new Date();

          const year = now.getFullYear();
          const month = ('0' + (now.getMonth() + 1)).slice(-2);
          const day = ('0' + now.getDate()).slice(-2);
          const hours = ('0' + now.getHours()).slice(-2);
          const minutes = ('0' + now.getMinutes()).slice(-2);
          const seconds = ('0' + now.getSeconds()).slice(-2);

          const formattedTime = year + "-" + month + "-"+ day + "  " + hours + ":" + minutes + ":"+ seconds;
          settime(formattedTime)
        },1000)

        return() => {
          clearInterval(t)
        }
    },)
    return (
        <div className={s.all}>
          <Topbar></Topbar>
          <div className={s.zw}></div>
          <div className={s.down}>
            <Card></Card>
            <div className={s.mode}>
              <div className={s.mtext1}>你好！这里是Clarca的个人博客，感谢关注！</div>
              <div className={s.mtext1}>当前时间:{time}</div>
            </div>
          </div>
        </div>
    )
}

export default Aboutme