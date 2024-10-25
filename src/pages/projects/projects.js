import s from './projects.module.scss'
import Loading from '../../component/loading/loading'
const Projects = () => {
    return(
        <div className={s.all}>
            <Loading />
            <div style={{height:'70px',width:'100%'}}></div>
            <div className={s.topimg} >
            </div>
        </div>
    )
}


export default Projects