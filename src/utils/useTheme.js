import { useEffect } from "react";

const useTheme = () => {
    const theme = 'light'
    useEffect(()=>{
        document.documentElement.setAttribute('data.theme',theme.value)
    },theme)
    return theme
}

export default useTheme