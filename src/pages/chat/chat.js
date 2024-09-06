import s from './chat.module.scss'
import user from '../../store/user'
import { useEffect, useState } from 'react'
import javar from '../../utils/javar'
const Chat = () => {
    const userid = user((state)=>state.userid)
    const [name,setname] = useState('')
    useEffect(()=> {
        async function get() {
            const { data } = await javar.get('/user',{
                params: {
                    id: userid
                }
            })
            setname(data[0].username)
        }
        get()
    },[])
    let ws = new WebSocket('ws://localhost:8080/chat')

// 连接成功后的回调函数
ws.onopen = function (params) {
  console.log('客户端连接成功')
  // 向服务器发送消息
  ws.send('hello')
};

// 从服务器接受到信息时的回调函数
ws.onmessage = function (e) {
  console.log('收到服务器响应', e.data)
};

// 连接关闭后的回调函数
ws.onclose = function(evt) {
  console.log("关闭客户端连接");
};

// 连接失败后的回调函数
ws.onerror = function (evt) {
  console.log("连接失败了");
};


// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，这样服务端会抛异常。
window.onbeforeunload = function() {
    ws.close();
}  

                        
    return (
        <div>
            <div className={s.toname}>Clarca</div>
            <div className={s.chat}>
            <div className={s.mymessage}>
                <div className={s.myavator}></div>
                <div className={s.mytext}>1111111111111231231233121212121212121212121212121212121212121212121212121212121212121212121212</div>
            </div>
            <div className={s.youmessage}>
                <div className={s.youavator}></div>
                <div className={s.youtext}>awdad12312222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</div>
            </div>
            </div>
            <input className={s.input}></input>
            <button className={s.button}>send</button>
        </div>
    )
}
export default Chat