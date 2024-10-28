import s from './projects.module.scss'
import Loading from '../../component/loading/loading'
const Projects = () => {
    return(
        <div className={s.all} id="all">
            <Loading />
            <div className={s.zw}></div>
            <div className={s.zong1}>
            <div className={s.blogsymbol}>
                <span className={s.myblogs}>Projects</span>
            </div>
            </div>
            <div className={s.project}>
                <div className={s.spro}>
                    <div className={s.protitle}>创数据团队主页</div>
                    <div className={s.lj} onClick={()=>{window.open('http://47.96.39.47:81')}}>链接(点我跳转)</div>
                </div>
            </div>
            </div>
    )
}


export default Projects