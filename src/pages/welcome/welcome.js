import s from './welcome.module.scss'
import { useNavigate } from 'react-router-dom'
import user from '../../store/user'
const Welcome = () => {
    const setid = user((state)=>state.setid)
    const navigate = useNavigate()
    function gologin() {
        navigate('/login')
    }
    function guest() {
        setid(1)
        navigate('/index/aboutme?index=1')
    }
    return (
        <div className={s.all}>
            <div className={s.back}></div>
            <div className={s.wel}>Welcome!</div>
            {/* <img src={require('../../img/back3.webp')}></img> */}
            <div className={s.card}>
                <div className={s.toptext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.9 6.1c-.4-.4-1.1-1.1-2.4-1.1H11C8.2 7 6 4.8 6 2H4c0 3.2 2.1 5.8 5 6.7V22h2v-6h2v6h2V10.1l4 3.9l1.4-1.4z"/></svg>
                    Hi,this is&nbsp;<span style={{color: 'purple'}}>Clarca</span>'s blog</div>
                    <div className={s.bottomb}>
                        <div className={s.button} onClick={()=>{guest()}}>Welcome</div>
                    </div>
            </div>
        </div>
    )
}

export default Welcome