import s from './column.module.scss'
import { useState, useEffect } from 'react'
import javar from '../../utils/javar'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Tag } from 'antd-mobile'
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
            const data = await javar.get('/flqd',{
                params: {
                    fl: fl
                }
            })
            setblog(data.data)
        }
        get()
    },[])
    return(
        <div className={s.all}>
            <div className={s.zw}></div>
            <div className={s.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M224 416H64V160h160zm224 0H288V160h160z"/></svg>
                <div className={s.zl}>文章专栏</div></div>
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
        </div>
    )
}

export default Column