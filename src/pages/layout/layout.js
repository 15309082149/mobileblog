
import React, { useEffect, useState, useRef } from 'react'
import { Dropdown, Radio, Space, SearchBar, Button, DotLoading, Empty } from 'antd-mobile'
import { BellOutline, TagOutline, KoubeiFill, StarFill, MessageFill, FireFill, TeamFill } from 'antd-mobile-icons'
import s from './layout.module.scss'
import request from '../../utils/request.js'
import { useNavigate } from 'react-router-dom'
const Layout = () => {
  const search1 = useRef(null)  //useref获得搜索框的value
  const navigate = useNavigate() //路由
  const [list,setlist] = useState([])  //使用一个list不断更新三种状态：1.初始获取所有文章，2.分类获取文章，3.搜索获取文章


    useEffect(() => {

      const empty = document.getElementById('empty')
      if(list.length === 0){                                  //通过判断是否有文章来进行空状态的隐藏，就不用在每次加载完后进行隐藏，减少代码量且逻辑更加严谨
        empty.style.display= 'block'
      }
      else {
        empty.style.display= 'none'
      }
    }) //不断进行判断


    useEffect(()=> {

      async function get()  {
        const data = await request.get('/blogtext')           //初始获取所有文章
        setlist(data.data)
        if(list) {                                            //加载动画逻辑也同上
          const load = document.getElementById('load')
          if(load){
          load.style.display = 'none'}
        }
      }
      get()
    },[])


    function navigateto(id) {
        navigate(`/details?id=${id}`)                          //动态路由
    }


    async function drop(e) {                                //分类查找文章
      const data = await request.get('/flqd',{
        params: {
          fl: String(e)                                         //关键词查找实现分类
        }
      })
      setlist(data.data)
    }


    async function search(val) {                               //关键词查找文章
      setlist([])
          const load = document.getElementById('load')
          load.style.display = 'block'
      const data = await request.get('/search',{               //查找加载完毕了关闭加载动画，不管有没有查找到都关闭，以保证空状态正常显示或文章正常渲染
        params: {
          value: val
        }
      })
      setlist(data.data)
      load.style.display = 'none'  //关闭load动画
    }


    return (
        <div className={s.all}>
          <div className={s.top_all}>
            <div className={s.top_left}><Dropdown>
          <Dropdown.Item key='sorter' title='分类' className={s.dropdown}>
            <div style={{ padding: 12 }}>
              <Radio.Group defaultValue='default'>
                <Space direction='vertical' block>
                  <Radio block value='react' onClick={()=> drop('react')}>
                    React
                  </Radio>
                  <Radio block value='vue' onClick={()=> drop('vue')}>
                    VUE
                  </Radio>
                  <Radio block value='js' onClick={()=> drop('js')}>
                    Javascript
                  </Radio>
                  <Radio block value='前端' onClick={()=> drop('前端')}>
                    前端
                  </Radio>
                  <Radio block value='后端' onClick={()=> drop('后端')}>
                    后端
                  </Radio>
                  <Radio block value='数据库' onClick={()=> drop('数据库')}>
                    数据库
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Dropdown.Item>
        </Dropdown>
         </div>
         <SearchBar placeholder='请输入内容' className={s.search} style={{ '--background': '#ffffff' }} onSearch={(val) => {
          search(val)
         }}  ref={search1}/>
         <div className={s.top_right}><BellOutline  className={s.top_icon}/><TagOutline  className={s.top_icon}/></div>
          </div>
          <div className={s.sec_top_all}>
            <div className={s.sec_top_iconall}>
            <Button block shape='rounded' color='primary' className={s.sec_top_button} style={{'background': '#2394ff'}} onClick={()=>{navigate('/index/layout')}}>
            <KoubeiFill />
          </Button>
          <Button block shape='rounded' color='primary' className={s.sec_top_button} style={{'background': '#ff436d'}} onClick={()=>{navigate('/index/function')}}>
            <StarFill />
          </Button>
          <Button block shape='rounded' color='primary' className={s.sec_top_button} style={{'background': '#f5902c'}}>
            <MessageFill />
          </Button>
          <Button block shape='rounded' color='primary' className={s.sec_top_button} style={{'background': '#9b66ff'}}>
            <FireFill />
          </Button>
          <Button block shape='rounded' color='primary' className={s.sec_top_button} style={{'background': '#38cd9a'}} onClick={()=>{navigate('/index/user')}}>
            <TeamFill />
          </Button>
          </div>
          <div className={s.sec_top_textall}>
            <div className={s.sec_top_text}>首页</div>
            <div className={s.sec_top_text}>组件</div>
            <div className={s.sec_top_text}>留言板</div>
            <div className={s.sec_top_text}>通知</div>
            <div className={s.sec_top_text}>个人中心</div>
          </div>
          </div>
          <div id='load' className={s.load}><DotLoading/></div>
          <div id="empty" className={s.empty}>
           <Empty description='暂无数据'/></div>
            <div className={s.mid_all}>
          {list.map((item,index) => {
              return (
                    <div className={s.mid_module} onClick={()=> navigateto(item.id)} key={index}>
                      <div className={s.mid_mod_img}><img src='https://img2.imgtp.com/2024/05/10/XzdytL5g.jpg' alt='error' className={s.img}></img></div>
                      <div className={s.mid_mod_text}>{item.title}</div>
                    </div>
                 )
          })}
          </div>
        </div>
    )
}

export default Layout