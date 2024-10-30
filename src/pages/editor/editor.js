// 文章编辑页，只能通过路由进行跳转，可以添加条件
import { useState } from 'react'
import s from './editor.module.scss'
import { Input } from 'antd-mobile'
import MDEditor from '@uiw/react-md-editor'
import axios from 'axios'
const Editor = () => {
    const [time, settime] = useState()
    const now = new Date();

    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);

    const formattedTime = year + "-" + month + "-"+ day
    const [value, setValue] = useState()
    const [title,settitle] = useState()
    const [text, settext] = useState()
    const [fl,setfl] = useState()
    function op() {
        settime(formattedTime)
        if(title&&value&&text&&fl&&time) {
            axios({
                method: 'post',
                url:'http://127.0.0.1:8080/addblog',          //这里换成你的后端地址
                data: {
                title: title,
                text: text,
                time: time,
                fl: fl,
                content: value,
                }
            }).then(result => {
                console.log(result)
            })
        // javar.post('/addblog',{
        //     // headers: {
        //     //     'Content-Type': 'application/x-www-form-urlencoded'
        //     // },
        //     data:{
        //         title: title,
        //         text: text,
        //         time: time,
        //         fl: fl,
        //         content: value,
        //     }
        // }).then(result => {
        //     console.log(result)
        // })
    }
    else {
        console.log('null')
    }
    }
    return(
        <div>
            <MDEditor value={value} onChange={setValue}/>
            <Input
            className={s.input}
          placeholder='请输入标题'
          value={title}
          onChange={val => {
            settitle(val)
          }}
        />
        <Input
            className={s.input}
          placeholder='请输入分类'
          value={fl}
          onChange={val => {
            setfl(val)
          }}
        />
        <Input
            className={s.input}
          placeholder='请输入简介'
          value={text}
          onChange={val => {
            settext(val)
          }}
        />
            <div className={s.submit} onClick={()=>{op()}}>确认</div>
            
        </div>
    )
}
export default Editor