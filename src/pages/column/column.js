// 专栏页面
import s from './column.module.scss'
import { useState, useEffect } from 'react'
import javar from '../../utils/javar'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Tag, ErrorBlock } from 'antd-mobile'
import End from '../../component/end/end'
import Topback from '../../component/topback/topback'
const Column = () => {
    const [blog,setblog] = useState()
    const [params] = useSearchParams()
    const navigate = useNavigate()
    var fl = params.get('fl')
    function navi(id) {
        console.log(id)
        navigate(`/details?id=${id}`)
    }
    useEffect(()=>{
        async function get() {
            const data = await javar.get('/flqd',{      //分类请求
                params: {
                    fl: fl
                }
            })
            console.log(data.data)
            if(data.data.length === 0) {
                document.getElementById("null").style.display = "block"                    //如果没有请求到就显示空图标
            }
            setblog(data.data)
        }
        get()
    },[])
    return(
        <div className={s.all}>
            <div className={s.zw}></div>
            <Topback></Topback>
            <div className={s.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M224 416H64V160h160zm224 0H288V160h160z"/></svg>
                <div className={s.zl}>文章专栏</div></div>
                <div id="null" style={{display: "none"}}>
                <ErrorBlock status='busy' title="暂无文章" description="以后会有的"/></div>
                {Array.isArray(blog) && blog.map((item,index)=> {
                    return(
                    <div className={s.blogs} onClick={() => {navi(item.id)}} key={index}>
                    <div className={s.blogtitle}>{item.title}</div>
                    <div className={s.time}>{item.time}</div>
                    <div className={s.blogtext}>{item.text}</div>
                    <div className={s.tag}><Tag round color='#2db7f5'>{item.fl}</Tag></div>
                </div>
                    )
                })}
                <End></End>
        </div>
    )
}

export default Column