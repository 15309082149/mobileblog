import s from './theme.module.scss'
import { Switch } from 'antd-mobile'
import useTheme from '../../utils/useTheme'
const Theme = () => {
    
//     const changeDark = (data) => {
//     document.documentElement.setAttribute('data.theme',data)
//    }
    let theme = localStorage.getItem('theme') ===null ? 'light' : localStorage.getItem('theme')
    let pp = theme === 'light' ? false : true
    document.documentElement.setAttribute('data-theme', theme)
    console.log(localStorage.getItem('theme'))
    const changeDark = () => {
        theme = theme === 'light' ? 'dark' : 'light'
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