import { useEffect, useState } from 'react'
import s from './blogs.module.scss'
import Zl from '../../component/zl/zl'
import { Tag } from 'antd-mobile'
import End from '../../component/end/end'
import javar from '../../utils/javar'
import { useNavigate } from 'react-router-dom'
const Blogs = () => {
    const navigate = useNavigate()
    function navi(id) {
        navigate(`/details?id=${id}`)
    }
    const [blog, setblog] = useState()
    useEffect(()=> {
        async function getblog () {
            await javar.get('/blogtext').then(result => {
                setblog(result.data)
                console.log(blog)
            })
        }
        getblog()

    },[])
    return(
        <div className={s.all}>
            <div className={s.zw}></div>
            <div className={s.blogsymbol}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#256382" d="m54.9 39.7l7.3 7.6l-32.1 16.1s-4.2 2.1-6.2-1.2c-8-13 31-22.5 31-22.5"/><path fill="#d9e3e8" d="M29.2 53.9s-6.1 2.3-5 6.6c1.2 4.5 6.1 1.8 6.1 1.8l30.5-15s-1.7-4.8 1.4-8z"/><path fill="#42ade2" d="M34.4 8.9L63.6 39L29.1 53.3L7 16.7z"/><path fill="#94989b" d="m60.7 42.6l-20.4 8.8l20-9.7zm-.3 2.6l-21.7 9.5L60 44.3zm.2 1.5L32.9 59.4l27.3-13.6z"/><path fill="#428bc1" d="M23.8 62.1c-3.4-7.5 5.3-8.8 5.3-8.8L7 16.7s-5-.1-5 5.4c0 2.3 1 4 1 4z"/><path fill="#547725" d="m8.7 32.2l-7.3 7.6l32.1 16.1s4.2 2.1 6.2-1.2c8-13-31-22.5-31-22.5"/><path fill="#d9e3e8" d="M34.3 46.4s6.1 2.3 5 6.6c-1.2 4.5-6 1.8-6 1.8l-30.5-15s1.7-4.8-1.4-8z"/><path fill="#83bf4f" d="M29.2 1.4L0 31.5l34.5 14.3L56.6 9.2z"/><path fill="#94989b" d="m3.2 34.2l20 9.7l-20.4-8.8zm.4 2.6l21.2 10.4l-21.7-9.5zm-.2 1.5l27.2 13.6L2.9 39.2z"/><path fill="#699635" d="M39.8 54.6c3.4-7.5-5.3-8.8-5.3-8.8L56.6 9.2s5-.1 5 5.4c0 2.3-1 4-1 4z"/><path fill="#962c2c" d="m56.7 26l6.1 6.4l-27.1 13.5s-3.6 1.7-5.3-1C23.8 34 56.7 26 56.7 26"/><path fill="#d9e3e8" d="M35 38s-5.2 1.9-4.2 5.6c1 3.8 5.1 1.5 5.1 1.5l25.7-12.7s-1.4-4 1.2-6.7z"/><path fill="#ed4c5c" d="M39.4 0L64 25.4L34.9 37.5L16.2 6.6z"/><path fill="#fff" d="m40.1 5.8l4.8 5.3l-17.7 6.7L23 11z"/><path fill="#94989b" d="m61.6 28.5l-17.2 7.3l16.8-8.2zm-.2 2.2L43 38.6l18-8.8zm.2 1.2L38.2 42.6L61.1 31z"/><path fill="#c94747" d="M30.5 44.9c-2.8-6.3 4.5-7.4 4.5-7.4L16.2 6.6s-4.3-.1-4.3 4.5c0 1.9.8 3.4.8 3.4z"/></svg>
                <span className={s.myblogs}>My Blogs</span>
            </div>
            <div className={s.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M224 416H64V160h160zm224 0H288V160h160z"/></svg>
                <div className={s.zl}>文章专栏</div></div>
                <Zl></Zl>
                <div className={s.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><ellipse cx="32.1" cy="35.8" fill="#428bc1" rx="25.2" ry="25.3"/><ellipse cx="32.1" cy="35.8" fill="#fff" rx="19.6" ry="19.7"/><path fill="#428bc1" d="M11 48.3L8.8 62h1.9c1.2 0 1.6-1.4 2.4-3.1c1-2.2 3.4-7.9 3.4-7.9zm42.1 0L55.4 62h-1.9c-1.2 0-1.6-1.4-2.4-3.1c-1-2.2-3.4-7.9-3.4-7.9zM13.3 10.2l5.9 5.9l-3.1 3.2l-5.9-6zm37.6 0L45 16.1l3.1 3.2l5.9-6z"/><path fill="#b0b8b8" d="M5.7 23.6L23.3 5.7C21.1 3.4 18 2 14.5 2C7.6 2 2 7.7 2 14.6c0 3.5 1.4 6.7 3.7 9M40.5 5.8l17.8 17.7c2.3-2.3 3.7-5.4 3.7-8.9C62 7.7 56.4 2 49.4 2c-3.5.1-6.6 1.5-8.9 3.8"/><path fill="#ed4c5c" d="m20.6 46.6l10.3-10.5l1.2 1.2l-10.3 10.4z"/><g fill="#428bc1"><circle cx="32.1" cy="35.8" r="3.7"/><path d="M30.2 21.7h3.7v15h-3.7zm3.7 12.2h7.5v3.7h-7.5z"/></g></svg>
                <div className={s.zl}>近期更新</div></div>
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

export default Blogs