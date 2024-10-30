// 主题切换按钮
import { Switch } from 'antd-mobile'
const Theme = () => {
    
//     const changeDark = (data) => {
//     document.documentElement.setAttribute('data.theme',data)
//    }
    let theme = localStorage.getItem('theme') ===null ? 'light' : localStorage.getItem('theme')           //从localstorage中获取当前主题，实现持久化，如果是第一次进入网页获取不到主题就设置为默认主题
    let pp = theme === 'light' ? false : true
    document.documentElement.setAttribute('data-theme', theme)         //设置全局CSS变量
    console.log(localStorage.getItem('theme'))
    const changeDark = () => {
        theme = theme === 'light' ? 'dark' : 'light'           //设置为相反主题
        localStorage.setItem('theme',theme)
        document.documentElement.setAttribute('data-theme', theme)
  }
    return (
    <div>
        <Switch
          uncheckedText='白' checkedText='黑'
          onChange={()=>{changeDark('dark')}}
          defaultChecked={ pp }
          style={{
            '--checked-color': '#1b1b1f',
            '--height': '36px',
            '--width': '60px',
          }}
        />
    </div>
    )
}

export default Theme 