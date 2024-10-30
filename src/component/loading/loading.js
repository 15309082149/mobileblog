// 加载动画
import s from './loading.module.scss'

const Loading = () => {
    return(
    <div className={s.all}>
        <div className={s.loader}>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={s.text}>Loading......</div>
    </div>
    )
}

export default Loading