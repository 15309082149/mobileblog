import s from './developing.module.scss'
import { ErrorBlock } from 'antd-mobile'
import Topback from '../../../component/topback/topback'
const Developing = () => {
    return(
        <div className={s.all}>
            <div className={s.zw}></div>
            <Topback></Topback>
            <div className={s.develop}>
                <ErrorBlock status='empty' description="" title="页面正在开发中"/>
            </div>
        </div>
    )
}

export default Developing