 import React, { useEffect, useState } from 'react'
import { NavBar, Space, DotLoading, Popup, Input, Button, Toast } from 'antd-mobile'
import s from './details.module.scss'
import { MoreOutline,LikeOutline, HeartOutline, MessageOutline, HeartFill } from 'antd-mobile-icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import request from '../../utils/request.js'
import javar from '../../utils/javar.js'
import MDEditor from '@uiw/react-md-editor'
 import user from '../../store/user.js'
const Details = () => {
    window.scrollTo(0, 0);
    const [params] = useSearchParams()
    let id = params.get('id')
    const navigate = useNavigate()
    const [content,setcontent] = useState() //文章内容
    const [title,settitle] = useState()  //文章标题和内容单独设置，弥补MD标题转换为HTML不足
    const userid = user((state) => state.userid)           //用户姓名，用于查找其他用户信息
    const [me,setme] = useState()  //我的信息
    const [username,setusername] = useState()  //用户名
    const [like,setlike] = useState(0)  //点赞数


    async function getpre() {                                  //根据文章ID查找文章所有评论
      const { data } = await javar.get('/getpreview',{
        params: {
          id: id
        }
      })
      setpre(data)
    }


    async function getlike() {
      const array = await javar.get('/likenum',{ //获取点赞的数量
        params: {
          id: params.get('id')
        }
      })
      setlike(array.data.length)
    }


    useEffect(() => {

    async function getuser() {                                 //保证评论功能根据用户查找，以实现用户与各自评论对应
      const { data } = await javar.get('/user',{
        params: {
          id: String(userid)  //userid是从本地仓库拿出的id
        }
      })
      setme(data[0].id)
      setusername(data[0].username)
  }
    getuser()
    getlike()
    },[])


  const [pre,setpre] = useState([])

  useEffect(()=> {

    // setTimeout(getpre(),2000)
    getpre()
  },[])


    useEffect(()=> {

        async function get() {                                 //文章详情页渲染
            const data = await javar.get('/findblog',{
                params: {
                    id: id
                }
            })
            setcontent(data.data.content)
            const data2 = await request.get('/title',{
                params: {
                    id: id
                }
            })
            settitle(data2.data[0].title)
            // setcontent(data.data[0].content)
            // const html = document.getElementById('po')
            // if(content&&title){
            //     const load1 = document.getElementById('load1')
            //     if(load1){
            //     load1.style.display = 'none'
            //     html.innerHTML = content
            //     }}
            // const img = document.querySelectorAll("img")
            //   img.forEach(e=>{
            //       e.style.position = 'static'
            //       e.style.width = '430px'
            //      })
            // const load = document.getElementById('load')
            // load.style.display = 'none'
        }


        get()

    },[])


    const [loves,setloves] = useState(true)

    function loved() {
        setloves(!loves)
    }


    const back = () =>                                       //顶部返回功能
    {
        navigate(-1)
    }

     const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  )
  
  const [visible1, setVisible1] = useState(false)

  const [value, setValue] = useState('')

  function sendmessage() {
        let date = new Date()
        javar.get('/sendmessage',{                                  //发送评论需要用户对应
          params: {
            id: params.get('id'),
            userid: me,
            content: value,
            username:username,
            time: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          }
        }).then(result=>{
          if(result.data) {
          getpre()
          Toast.show('发送成功！')
          setValue('')                        //判断是否发送成功，如果成功再次渲染并清空输入框
          }
          else {
            Toast.show('发送失败！')
          }
        })
    }


    function likes() {
      javar.get('/addlikes',{
        params: {
          id: params.get('id'),
          userid: userid
        }
      }
      ).then(result=>{
        if(result.data) {                     //利用后端返回值判断此用户是否点赞过这个文章，0为已经点赞过
          getlike()
        }
        else {
          Toast.show('您已点赞过该文章！')
        }
      })
    }


    const [swipe,setswipe] = useState(true)

    return (
        <div className={s.all}>
            <NavBar right={right} onBack={back}>
          文章详情
        </NavBar>
        <div className={s.title}>{title}
        <div id='load'><DotLoading/></div></div>
        <div id='load1' className={s.load}><DotLoading/></div>
        <div className={s.detail}>
          <MDEditor.Markdown source={content}></MDEditor.Markdown>
            {/* <ReactMarkdown children={content}></ReactMarkdown> */}
        </div>
        <div className={s.zw}></div>
        <div className={s.bottom}>
            <div className={s.good}>
                <div className={s.lefticon} onClick={()=>{likes()}}><LikeOutline /><div className={s.likesnum}>{like}</div></div>
                <div className={s.righticon}><LikeOutline /></div>
            </div>
            <div className={s.bottom_right}>
                {loves ? <HeartOutline onClick={()=> loved()} /> : <HeartFill onClick={()=> loved()}/>}
                <MessageOutline className={s.bottom_righticon} onClick={()=> {
                setVisible1(true)
                }}/></div>
        </div>
        <div className={s.pop}>
        <Popup
              closeOnSwipe={swipe}
              className={s.pop}
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              onClose={() => {
                setVisible1(false)
              }}
              bodyStyle={{ height: '800px'}}
            >
              <div className={s.pl_top}>查看全部{pre.length}条评论</div>
              <div className={s.bigmod}>
              {pre.map(item=> <div className={s.pl_mod} key={item.time}>
                <div className={s.pl_mod_top}>
                <div className={s.pl_mod_avator}></div>
                <div className={s.pl_mod_name}>{item.username}</div>
                </div>
                <div className={s.pl_content}>{item.content}</div>
                <div className={s.pl_time}>{item.time}</div>
              </div>)}</div>
              <div className={s.pl_bottom}>
                <div className={s.pl_mod_avator1}></div>
                <Input
          className={s.pl_input}
          placeholder='写评论...'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
        <Button className={s.send} color='success' onClick={()=>sendmessage()}>发送</Button>
              </div>
            </Popup>
            </div>
        </div>
    )
}

export default Details