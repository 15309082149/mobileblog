// 电脑端名片
import s from './mecard.module.scss'
import animation from '../../static/lotties/animation5.json'
import Lottie from 'lottie-react'
const Mecard = () => {
    return(
        <div className={s.mecard}>
              <div className={s.left}>成都</div>
              <div className={s.ava}>
                  <Lottie animationData={animation} className={s.lottie}></Lottie>
                  <img src={require("../../img/ava.png")} className={s.avai}></img>
                  {/* <div className={s.avadeco}></div> */}
              </div>
              <div className={s.right}>前端开发</div>
            </div>
    )
}

export default Mecard