// 网页末尾作者
import s from './end.module.scss'

const End = () => {
    function beian() {
        window.open("https://beian.miit.gov.cn")
    }
    function copy() {
        window.open("http://47.96.39.47:80")
    }
    return (
        <div className={s.all}>
            <div className={s.end}></div>
            <div className={s.endtext}><span onClick={()=>{copy()}}>Copyright © 2024 Clarca</span>&nbsp; / &nbsp;<span onClick={()=>{beian()}} className={s.beian}>蜀ICP备2024068440号</span></div>
        </div>

    )
}

export default End