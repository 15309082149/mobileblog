//  详情页
 import React, { useEffect, useState } from 'react'
import { NavBar, Space, DotLoading, Popup, Input, Button, Toast } from 'antd-mobile'
import s from './details.module.scss'
import { MoreOutline,LikeOutline, HeartOutline, MessageOutline, HeartFill } from 'antd-mobile-icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import javar from '../../utils/javar.js'
import MDEditor from '@uiw/react-md-editor'
import End from '../../component/end/end.js'
 import user from '../../store/user.js'
import Topbar from '../../component/topbar/topbar.js'
import Topback from '../../component/topback/topback.js'
const Details = () => {
    // window.scrollTo(0, 0);
    const [params] = useSearchParams()
    let id = params.get('id')         //根据ID查找对应文章
    const navigate = useNavigate()
    const [content,setcontent] = useState() //文章内容
    const [blog,setblog] = useState() //
    // const [title,settitle] = useState()  //文章标题和内容单独设置，弥补MD标题转换为HTML不足
    const userid = user((state) => state.userid)           //用户姓名，用于查找其他用户信息
    const [me,setme] = useState()  //我的信息
    const [username,setusername] = useState()  //用户名
    const [like,setlike] = useState(0)  //点赞数


    // async function getpre() {                                  //根据文章ID查找文章所有评论
    //   const { data } = await javar.get('/getpreview',{
    //     params: {
    //       id: id
    //     }
    //   })
    //   setpre(data)
    // }


    // async function getlike() {
    //   const array = await javar.get('/likenum',{ //获取点赞的数量
    //     params: {
    //       id: params.get('id')
    //     }
    //   })
    //   setlike(array.data.length)
    // }


  //   useEffect(() => {
  //     // const theme = localStorage.getItem('theme')
  //     // if(theme === 'dark') {
  //     //   console.log(document.getElementById('bcg'))
  //     //   document.getElementById('bcg').style.removeProperty("background")
  //     // }

  //   async function getuser() {                                 //保证评论功能根据用户查找，以实现用户与各自评论对应
  //     const { data } = await javar.get('/user',{
  //       params: {
  //         id: String(userid)  //userid是从本地仓库拿出的id
  //       }
  //     })
  //     setme(data[0].id)
  //     setusername(data[0].username)
  // }
  //   getuser()
  //   getlike()
  //   },[])


  const [pre,setpre] = useState([])

  // useEffect(()=> {

  //   // setTimeout(getpre(),2000)
  //   getpre()
  // },[])


    useEffect(()=> {

        async function get() {                                 //文章详情页渲染
            const data = await javar.get('/findblog',{
                params: {
                    id: id
                }
            })
            setcontent(data.data.content)
            const data2 = await javar.get('/getblog',{
              params: {
                id: id
              }
            })
            setblog(data2.data)               //文章详情
            // const data2 = await request.get('/title',{
            //     params: {
            //         id: id
            //     }
            // })
            // settitle(data2.data[0].title)
            // setcontent(data.data[0].content)
            // const html = document.getElementById('po')
            // if(content){
            //     const load1 = document.getElementById('load1')       //load
            //     console.log('1')
            //     if(load1){
            //     load1.style.display = 'none'
            
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

    },[content])


    // const [loves,setloves] = useState(true)

    // function loved() {
    //     setloves(!loves)            //喜欢
    // }


  //   const back = () =>                                       //顶部返回功能
  //   {
  //     document.getElementById('all').style.opacity = '0'
  //     setTimeout(()=>{
  //         navigate(-1)
  //     },500)
  //   }

  //    const right = (
  //   <div style={{ fontSize: 24 }}>
  //     <Space style={{ '--gap': '16px' }}>
  //       <MoreOutline />
  //     </Space>
  //   </div>
  // )
  
  const [visible1, setVisible1] = useState(false)

  const [value, setValue] = useState('')

  // function sendmessage() {
  //       if(me === 1) {
  //         Toast.show({
  //           content:"未登录无法发表评论!"
  //         })
  //         return
  //       }
  //       if(value === '') {
  //         Toast.show({
  //           content:"评论不能为空！"
  //         })
  //         return
  //       }
  //       let date = new Date()
  //       javar.get('/sendmessage',{                                  //发送评论需要用户对应
  //         params: {
  //           id: params.get('id'),
  //           userid: me,
  //           content: value,
  //           username:username,
  //           time: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  //         }
  //       }).then(result=>{
  //         if(result.data) {
  //         getpre()
  //         Toast.show('发送成功！')
  //         setValue('')                        //判断是否发送成功，如果成功再次渲染并清空输入框
  //         }
  //         else {
  //           Toast.show('发送失败！')
  //         }
  //       })
  //   }


    // function likes() {
    //   javar.get('/addlikes',{
    //     params: {
    //       id: params.get('id'),
    //       userid: userid
    //     }
    //   }
    //   ).then(result=>{
    //     if(result.data) {                     //利用后端返回值判断此用户是否点赞过这个文章，0为已经点赞过
    //       getlike()
    //     }
    //     else {
    //       Toast.show('您已点赞过该文章！')
    //     }
    //   })
    // }


    // const [swipe,setswipe] = useState(true)

    return (
        <div className={s.all} id="all">
          <Topbar></Topbar>
          <div style={{height:'70px'}}></div>
            <Topback></Topback>
        <div className={s.bcg} id="bcg"></div>
        {/* <div className={s.title}>{title}</div> */}
        {/* <div id='load1' className={s.load}><DotLoading/></div> */}
        <div className={s.detail}>
          <MDEditor.Markdown source={content} className={s.markd}></MDEditor.Markdown>
            {/* <ReactMarkdown children={content}></ReactMarkdown> */}
        </div>
        <div className={s.enddetail}>
          {blog && <div className={s.entext}>
            <div className={s.entexts}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#00A6ED" d="M17.045 27.286H30V13a2 2 0 0 0-2-2H17.045z"/><path fill="#D3D3D3" d="M15.682 27.964H30v1.357H15.682z"/><path fill="#0074BA" d="M16.023 11A1.02 1.02 0 0 0 15 12.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V11z"/><path fill="#0074BA" d="M16.023 27.286A1.02 1.02 0 0 0 15 28.304v.678A1.02 1.02 0 0 0 16.023 30h12.954c.446 0 .824-.283.965-.678H16.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H30v-.678z"/><path fill="#CA0B4A" d="M10.045 23.286H23V9a2 2 0 0 0-2-2H10.045z"/><path fill="#D3D3D3" d="M8.682 23.964H23v1.357H8.682z"/><path fill="#990838" d="M9.023 7A1.02 1.02 0 0 0 8 8.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V7z"/><path fill="#990838" d="M9.023 23.286A1.02 1.02 0 0 0 8 24.304v.678A1.02 1.02 0 0 0 9.023 26h12.954c.446 0 .824-.283.965-.678H9.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H23v-.678z"/><path fill="#86D72F" d="M4.045 20.286H17V6a2 2 0 0 0-2-2H4.045z"/><path fill="#D3D3D3" d="M2.682 20.964H17v1.357H2.682z"/><path fill="#44911B" d="M3.023 4A1.02 1.02 0 0 0 2 5.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V4z"/><path fill="#008463" d="M3.023 20.286A1.02 1.02 0 0 0 2 21.304v.678A1.02 1.02 0 0 0 3.023 23h12.954c.446 0 .824-.283.965-.678H3.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H17v-.678z"/></g></svg>
            Last updated time:{blog.time}</div></div>}
            <div className={s.entext}>
          <div className={s.entexts}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72"><path fill="#92D3F5" d="M17 61v-4c0-5 5-9 10-9q9 7.5 18 0c5 0 10 4 10 9v4"/><path fill="#FCEA2B" d="M24.9 31c0 9 4.9 14 11 14c6 0 11.1-5 11.1-14a12.4 12.4 0 0 0-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.1 1-1.1 6"/><path fill="#F1B31C" d="M36 12c-10 0-14 7-14 14c0 6.7 0 12.4 3.5 12.9c.2.5.4.9.6 1.4a14 14 0 0 0 2.1 2.7a10 10 0 0 0 7.4 2.5h.3a10 10 0 0 0 7.4-2.5a9 9 0 0 0 2.1-2.7q.562-1.072 1-2.2l-.3.9c3.9-.1 3.9-6 3.9-13s-4-14-14-14m4 27c0 .7-1.6 2-4 2s-4-1.3-4-2v-1.9a1 1 0 0 1 1-1l3 1.5l3.1-1.5a.945.945 0 0 1 1 1zm4.9-4.2s-1.9 3-2.7-1.2a24.3 24.3 0 0 0-13.1 0c-.7 4.2-2.7 1.2-2.7 1.2a29 29 0 0 1-1.6-4.1c.192-1.864.56-3.705 1.1-5.5c7.2-1 12.9-7.1 12.9-7.1s1.4 1.2 7.2 7.8q.47 1.979.7 4a19 19 0 0 1-1.8 4.9"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M25.5 39.2C20.7 39.2 22 33 22 26s4-14 14-14s14 7 14 14s.9 13.4-4 13M17 60v-3c0-5 5-9 10-9q9 7.5 18 0c5 0 10 4 10 9v3"/><path d="M41.9 29a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth="2" d="M47 31a12.4 12.4 0 0 0-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.1 1-1.1 6"/><path d="M39.9 36.5a.99.99 0 0 1-.5 1.3a7.2 7.2 0 0 1-3.5.8a8.1 8.1 0 0 1-3.4-.8a.99.99 0 0 1-.5-1.3a.883.883 0 0 1 1.2-.5c.1 0 .1 0 .1.1c1.58.9 3.52.9 5.1 0a1.13 1.13 0 0 1 1.5.4"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24.9 31c-.2 3.1-.3 6.6 1.2 9.3a14 14 0 0 0 2.1 2.7a10.58 10.58 0 0 0 7.4 2.5"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M47 31a8.4 8.4 0 0 1-1.9 3.9s-1.9 3-2.7-1.2a24.3 24.3 0 0 0-13.1 0c-.8 4.2-2.7 1.2-2.7 1.2A11.1 11.1 0 0 1 25 31"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M47 31.4a16.1 16.1 0 0 1-1.6 8.9a9 9 0 0 1-2.1 2.7a10 10 0 0 1-7.4 2.5h-.3"/></svg>
            Article creator:Clarca</div>
          </div>
        </div>
        <End></End>
        <div className={s.zw}></div>
        {/* <div className={s.bottom}>
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
              bodyStyle={{ height: '80%'}}
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
            </div> */}
        </div>
    )
}

export default Details