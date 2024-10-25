import s from './vfxli.module.scss'
import { useNavigate} from 'react-router-dom'
const Vfxli = () => {
    const navigate = useNavigate()
    return(
        <div className={s.all}>
            <div className={s.zw}></div>
            <div className={s.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#2F88FF" d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"/><path d="M36.1777 36.0537L44.1777 44.0179"/></g></svg>
                <div className={s.zl}>一些CSS特效</div></div>
                <div className={s.text}>最近对前端样式比较感兴趣，这个东西最离不开的就是CSS，CSS是非常强大的语言，使用它几乎可以完成所有的特效工作，下面是使用HTML+CSS+JS实现的各个特效作品，末尾附带源码。持续更新中......</div>
                <div className={s.mod} onClick={()=>{navigate('/index/rain')}} style={{background: 'aqua'}}>
                    <div className={s.modtext}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#2F88FF" d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"/><path d="M36.1777 36.0537L44.1777 44.0179"/></g></svg>
                      雷雨特效
                    </div>
                </div>
                {/* <div className={s.mod} onClick={()=>{navigate('/index/change')}} style={{background: '#fc5531'}}>
                    <div className={s.modtext}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#2F88FF" d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"/><path d="M36.1777 36.0537L44.1777 44.0179"/></g></svg>
                      手机充电特效
                    </div>
                </div> */}
        </div>
    )
}

export default Vfxli