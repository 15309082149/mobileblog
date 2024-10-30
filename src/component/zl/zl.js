// 可以缩放的专栏
import s from './zl.module.scss'
import { useState } from 'react'
import { AddOutline } from 'antd-mobile-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Zl = () => {
    const navigate = useNavigate()
    const zlarray = [
        {title: 'Vue源码解析',content:'最近为了深入研究Vue框架而写的源码解析',color:'#37bef6',zlid:'zl1',inid:'in1',iconid:'icon1',iskai:false},
        {title: '学习笔记',content:'从开始学习软件到现在所有的学习笔记',color:'#2ed0c5',zlid:'zl2',inid:'in2',iconid:'icon2',iskai:false},
        {title: '日常笔记',content:'日常记录',color:'#fb9e35',zlid:'zlw3',inid:'in3',iconid:'icon3',skai:false},
        {title: 'Leetcode刷题笔记',content:'平时在力扣上刷题的解析与笔记',color:'#27e78b',zlid:'zlw4',inid:'in4',iconid:'icon4',skai:false},
    ]                                    //专栏数组，其中zlid,inid,iconid随之递推即可
    const [kai1, setkai1] = useState(true)
    const [kai2, setkai2] = useState(true)
    const [kai3, setkai3] = useState(true)
    const [kai4, setkai4] = useState(true)            //控制每个专栏处于什么状态
    function zhankai(zlz,inz,iconz,index) {
        const zl = document.getElementById(zlz)
        const in1 = document.getElementById(inz)
        const icon = document.getElementById(iconz)               //获取专栏DOM元素，每次点击只获取相应的元素。
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
            case 3:
            if(kai4 === true) {
            zl.style.height = 100 + 'px'
            in1.style.opacity = 1
            icon.style.transform = "rotate(45deg)"
        }
        else {
            zl.style.height = 60 + 'px'
            in1.style.opacity = 0
            icon.style.transform = "rotate(-0deg)"
        }setkai4(!kai4)
            break;
            default: console.log('error')
        }                     //每添加一个专栏就switch一个，每个开关里面都有if else判断(逻辑有些麻烦，如有更好的思路欢迎修改)
    }
    function fl(title) {
        navigate(`/index/column?fl=${title}`)
    }                //点击事件
    return(
        <div className={s.all}>
            {zlarray.map((item,index) => {
                    return(
                    <div className={s.smallzl} style={{background: item.color}} id={item.zlid} key={index}>
                      <div className={s.smallzltext} onClick={()=>{fl(item.title)}}>{item.title}</div>
                      <div className={s.righticon} onClick={() => {zhankai(item.zlid,item.inid,item.iconid,index)}}><AddOutline id={item.iconid} className={s.icon}/></div>
                      <div className={s.introduce} id={item.inid}>{item.content}</div>
                    </div>
                    )
                }) }
        </div>
    )
}

export default Zl