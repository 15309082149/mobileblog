import s from './topback.module.scss'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
const Topback = () => {
        const navigate = useNavigate()
    function back() {
        navigate(-1)
    }
    return(
        <div className={s.backb}>
                <LeftOutline onClick={()=>{back()}}/>
            </div>
    )
}

export default Topback