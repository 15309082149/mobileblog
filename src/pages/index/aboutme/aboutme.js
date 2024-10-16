
import React, { useEffect, useState, useRef } from 'react'
import s from './aboutme.module.scss'
import { MessageOutline, AppOutline, KoubeiOutline, TravelOutline, GlobalOutline } from 'antd-mobile-icons'
import Card from '../../../component/card/card'
import { Swiper } from 'antd-mobile'
import End from '../../../component/end/end'
const Aboutme = () => {
  const stackarray = [
    {  url: require('../../../img/stackimg/vue.jpeg'),
       name: 'Vue'
    },
    {url: require('../../../img/stackimg/react.jpeg'),
      name: 'React'
    },
    {url: require('../../../img/stackimg/node.jpeg'),
      name: 'Node.js'
    },
    {url: require('../../../img/stackimg/css.jpeg'),
      name: 'Css'
    },
    {url: require('../../../img/stackimg/html.jpeg'),
      name: 'Html'
    },
    {url: require('../../../img/stackimg/ts.jpeg'),
      name: 'Typescript'
    },
    {url: require('../../../img/stackimg/js.jpeg'),
      name: 'Javascript'
    }
  ]

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const changetime = 10000
    const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={s.content}
      style={{ background: color }}
      autoplayInterval={changetime}
    >
      广告招租
    </div>
  </Swiper.Item>
))

    const [time,settime] = useState()


    useEffect(()=> {
        const t = setInterval(()=>{
          const now = new Date();

          const year = now.getFullYear();
          const month = ('0' + (now.getMonth() + 1)).slice(-2);
          const day = ('0' + now.getDate()).slice(-2);
          const hours = ('0' + now.getHours()).slice(-2);
          const minutes = ('0' + now.getMinutes()).slice(-2);
          const seconds = ('0' + now.getSeconds()).slice(-2);

          const formattedTime = year + "-" + month + "-"+ day + "  " + hours + ":" + minutes + ":"+ seconds;
          settime(formattedTime)
        },1000)

        return() => {
          clearInterval(t)
        }
    },)
    return (
        <div className={s.all}>
          <div className={s.zw}></div>
          <div className={s.down}>
            <Card></Card>
            <div className={s.mode}>
              <div className={s.mtext1}>你好！这里是Clarca的个人博客，感谢关注！</div>
              <div className={s.mtext1}>当前时间:{time}</div>
            </div>
            <div className={s.smode}>
              <div className={s.topiconarea}><MessageOutline /><div className={s.iconatext}>Studied software engineering at Southwest Petroleum University</div></div>
              <div className={s.smbottom}>
                <div className={s.smbtext}>Current study direction is <span style={{color:'#2dd1c3',}}>Front-end</span> developing</div>
                <div className={s.smbtext1}>Learning about <span style={{color:'#36bef3',}}>Back-end development </span>and <span style={{color:'#33c7df',}}>Algorithms</span></div>
              </div>
            </div>
            <div className={s.swiper}>
              <Swiper
          loop
          autoplay
          onIndexChange={i => {
            console.log(i, 'onIndexChange1')
          }}
        >
          {items}
        </Swiper>
            </div>
            <div className={s.stack}>
              <div className={s.topiconarea}><AppOutline/><div className={s.iconatext}>Tech stacks</div></div>
              {stackarray.map((item,index) => {
                return (
                  <div className={s.sstack} key={index}>
                <div className={s.stackicon}><img src={item.url}></img></div>
                <div className={s.stacktext}>{item.name}</div>
              </div>

                )
              })}
            </div>
            <div className={s.award}>
              <div className={s.topiconarea}><KoubeiOutline /><div className={s.iconatext}>Award</div></div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM6 11H4V4h2zm10 .5c0 1.93-.58 3.5-4 3.5c-3.41 0-4-1.57-4-3.5V6h8zm4-.5h-2V4h2z"/></svg>
                待更新
              </div>
            </div>
            <div className={s.award}>
              <div className={s.topiconarea}><TravelOutline /><div className={s.iconatext}>Work experience</div></div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19V8zv-.375zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.962-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm8-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"/></svg>
                待更新
              </div>
            </div>
            <div className={s.award}>
              <div className={s.topiconarea}><GlobalOutline /><div className={s.iconatext}>About me</div></div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                Github:<a>https://github.com/15309082149</a>
              </div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.048 3.323c.022.277-.13.523-.338.55c-.21.026-.397-.176-.419-.453s.13-.523.338-.55c.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333c-.027.048-.008.117.037.15c.045.035.092.025.119-.003c.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098c.023-.063.017-.11-.006-.142c-.016-.023-.089-.08-.247-.118"/><path d="M11.727 6.719c0-.022.01-.375.01-.557c0-3.07-1.45-6.156-5.015-6.156S1.708 3.092 1.708 6.162c0 .182.01.535.01.557l-.72 1.795a26 26 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113c.36.044 1.401-1.647 1.401-1.647c0 .979.504 2.256 1.594 3.179c-.408.126-.907.319-1.228.556c-.29.213-.253.43-.201.518c.228.386 3.92.246 4.985.126c1.065.12 4.756.26 4.984-.126c.052-.088.088-.305-.2-.518c-.322-.237-.822-.43-1.23-.557c1.09-.922 1.594-2.2 1.594-3.178c0 0 1.041 1.69 1.401 1.647c.168-.02.388-.926-.292-3.113a26 26 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53a.1.1 0 0 1-.009.096c-.109.159-1.554.943-3.033.943h-.017c-1.48 0-2.925-.784-3.034-.943a.1.1 0 0 1-.018-.055q0-.022.01-.04c.13-.287 1.43-.606 3.042-.606h.017c1.611 0 2.912.319 3.042.605m-4.32-.989c-.483.022-.896-.529-.922-1.229s.344-1.286.828-1.308c.483-.022.896.529.922 1.23c.027.7-.344 1.286-.827 1.307Zm2.538 0c-.484-.022-.854-.607-.828-1.308c.027-.7.44-1.25.923-1.23c.483.023.853.608.827 1.309c-.026.7-.439 1.251-.922 1.23ZM2.928 8.99q.32.063.639.117v2.336s1.104.222 2.21.068V9.363q.49.027.937.023h.017c1.117.013 2.474-.136 3.786-.396c.097.622.151 1.386.097 2.284c-.146 2.45-1.6 3.99-3.846 4.012h-.091c-2.245-.023-3.7-1.562-3.846-4.011c-.054-.9 0-1.663.097-2.285"/></g></svg>
                QQ:1156344184
              </div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32C100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6l68-34.1c24.4 4.8 43.8 9.7 68.2 9.7c6.2 0 12.1-.3 18.3-.8c-4-12.9-6.2-26.6-6.2-40.8c-.1-84.9 72.9-154 165.3-154m-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4c0 14.5-9.7 24.2-24.2 24.2c-14.8 0-29.3-9.7-29.3-24.2c.1-14.7 14.6-24.4 29.3-24.4m-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2c0-14.8 14.8-24.4 29.3-24.4c14.8 0 24.4 9.7 24.4 24.4c0 14.6-9.6 24.2-24.4 24.2M563 319.4c0-77.9-77.9-141.3-165.4-141.3c-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3l-14.8-48.6C534 402.1 563 363.2 563 319.4m-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.8 0 24.4 9.7 24.4 19.3c0 10-9.7 19.6-24.4 19.6m107.1 0c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.5 0 24.4 9.7 24.4 19.3c.1 10-9.9 19.6-24.4 19.6"/></svg>
                Weixin:15309082149
              </div>
              <div className={s.awards}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"/><path fill="#FFF" d="M19.723 6.552c2.264 0 6.666.744 6.666 3.473c0 1.116-.775 2.077-1.922 2.077c-1.272 0-2.139-1.085-4.744-1.085c-3.844 0-5.829 3.256-5.829 7.038c0 3.689 2.015 6.852 5.829 6.852c2.605 0 3.658-1.302 4.93-1.302c1.396 0 2.047 1.395 2.047 2.107c0 2.977-4.682 3.659-6.976 3.659c-6.294 0-10.666-4.992-10.666-11.41c-.001-6.448 4.34-11.409 10.665-11.409"/></svg>
                CSDN:<a>https://blog.csdn.net/2301_80659102</a>
              </div>
            </div>
            <End></End>
          </div>
        </div>
    )
}

export default Aboutme