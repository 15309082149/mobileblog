import s from './mecard.module.scss'

const Mecard = () => {
    return(
        <div className={s.mecard}>
              <div className={s.left}>成都</div>
              <img src={require("../../img/ava.png")} className={s.ava}></img>
              <div className={s.right}>前端开发</div>
            </div>
    )
}

export default Mecard