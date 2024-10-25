import Topback from '../../../component/topback/topback'
import s from './rain.module.scss'
import './rain.module.scss'
import { EyeOutline } from 'antd-mobile-icons'
import { FloatingBubble, Toast, Dialog } from 'antd-mobile'
import { useEffect } from 'react'
const Rain = () => {
    function copy() {
        navigator.clipboard.writeText("llll")
    }
    const onClick = () => {
      Dialog.show({
                content: '暂无源码下载',
                closeOnAction: true,
                actions: [
                  {
                    key: 'copy',
                    text: '复制地址',
                    onClick: copy()
                  },
                  [
                    {
                      key: 'cancel',
                      text: '取消',
                    },
                  ],
                ],
              })
  }
    useEffect(()=>{
        function rain() {
        let cloud = document.getElementById('cloud')
        let e = document.createElement('div')
        let left = Math.floor(Math.random() * 310)
        let width = Math.random() * 5
        let height = Math.random() * 25
        let duration = Math.random() * 0.5

        e.classList.add(`${s.drop}`)
        if(cloud) {
            cloud.appendChild(e)
        }
        e.style.left = left + 'px'
        e.style.width = 0.5+width+'px'
        e.style.height = 0.5+height+'px'
        e.style.animationDuration = 1+duration+'s'

        setTimeout(function(){
            if(cloud) {
                cloud.removeChild(e)
            }
        },2000)
    }
    setInterval(function(){
        rain()
    },20)

    })
    return(
        <div>
            <div className={s.zw}></div>
        <div className={s.all}>
            <div className={s.container}>
                <div className={s.cloud} id="cloud"></div>
            </div>
        </div>
        <FloatingBubble
        style={{
          '--initial-position-bottom': '24px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
          '--background': 'white'
        }}
        onClick={onClick}
      >
        <EyeOutline  fontSize={32} style={{color: 'black'}}/>
      </FloatingBubble>
        </div>
    )
}


export default Rain