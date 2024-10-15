import s from './zl.module.scss'
import { useState } from 'react'
import { AddOutline } from 'antd-mobile-icons'
import React from 'react'
const Zl = () => {
    const zlarray = [
        {title: 'Vue源码解析',content:'最近为了深入研究Vue框架而写的源码解析',color:'#37bef6',zlid:'zl1',inid:'in1',iconid:'icon1',iskai:false},
        {title: '学习笔记',content:'从开始学习软件到现在所有的学习笔记',color:'#2ed0c5',zlid:'zl2',inid:'in2',iconid:'icon2',iskai:false},
        {title: '日常笔记',content:'日常记录',color:'#fb9e35',zlid:'zlw3',inid:'in3',iconid:'icon3',skai:false},
    ]
    const [kai1, setkai1] = useState(true)
    const [kai2, setkai2] = useState(true)
    const [kai3, setkai3] = useState(true)
    function zhankai(zlz,inz,iconz,index) {
        const zl = document.getElementById(zlz)
        const in1 = document.getElementById(inz)
        const icon = document.getElementById(iconz)
        switch(index) {
            case 0: 
            if(kai1 === true) {
            zl.style.height = 100 + 'px'
            in1.style.opacity = 1
            icon.style.transform = "rotate(45deg)"
        }
        else {
            zl.style.height = 60 + 'px'
            in1.style.opacity = 0
            icon.style.transform = "rotate(-0deg)"
        }setkai1(!kai1)
            break;
            case 1: 
            if(kai2 === true) {
            zl.style.height = 100 + 'px'
            in1.style.opacity = 1
            icon.style.transform = "rotate(45deg)"
        }
        else {
            zl.style.height = 60 + 'px'
            in1.style.opacity = 0
            icon.style.transform = "rotate(-0deg)"
        }setkai2(!kai2)
            break;
            case 2: 
            if(kai3 === true) {
            zl.style.height = 100 + 'px'
            in1.style.opacity = 1
            icon.style.transform = "rotate(45deg)"
        }
        else {
            zl.style.height = 60 + 'px'
            in1.style.opacity = 0
            icon.style.transform = "rotate(-0deg)"
        }setkai3(!kai3)
            break;
            default: console.log('error')
        }
    }
    return(
        <div className={s.all}>
            {zlarray.map((item,index) => {
                    return(
                    <div className={s.smallzl} style={{background: item.color}} id={item.zlid} key={index}>
                      <div className={s.smallzltext}>{item.title}</div>
                      <div className={s.righticon} onClick={() => {zhankai(item.zlid,item.inid,item.iconid,index)}}><AddOutline id={item.iconid} className={s.icon}/></div>
                      <div className={s.introduce} id={item.inid}>{item.content}</div>
                    </div>
                    )
                }) }
        </div>
    )
}

export default Zl