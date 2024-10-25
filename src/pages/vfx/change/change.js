import s from './change.module.scss'

const Change = () => {
    return(
        <div className={s.box}>
            {/* <div className={s.number}>95.2%</div> */}
            <div className={s.contrast}>
                <div className={s.bubblehome}>
                    <div className={s.bubble}></div>
                </div>
                <div className={s.circle}></div>
            </div>
        </div>
    )
}

export default Change