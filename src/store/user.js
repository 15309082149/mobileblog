import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { persist } from 'zustand-persist';

const user = create(persist((set) => ({
  userid: '',
  setid:(action)=>{
    set((state)=>({userid: action}))
  }

                      
}),
{
      // 持久化配置项
      key: 'settings', // localStorage 中的 key 值
      whitelist: ['theme'], // 只持久化 theme 状态
      blacklist: [], // 不持久化任何状态
      debug: false, // 是否在控制台输出调试信息
    }
  )
)
export default user