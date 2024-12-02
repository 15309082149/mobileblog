// 个人名片卡
import s from './card.module.scss'
import animation from '../../static/lotties/animation5.json'
import Lottie from 'lottie-react'
const Card = () => {
    return(
        <div className={s.card}>
              <div className={s.avatorarea}>
                <div className={s.avator}>
                  <Lottie animationData={animation} className={s.lottie}></Lottie>
                  <img src={require("../../img/ava.png")} className={s.ava}></img>
                </div>
              </div>
              <div className={s.textarea}>
                <table className={s.table}>
                  <thead></thead>
                  <tbody>
                  <tr>
                  <th>Base</th>
                  <th>Direction</th>
                  </tr>
                  <tr>
                    <td>成都</td>
                    <td>前端开发</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
    )
}

export default Card