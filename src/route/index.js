import Index from '../pages/index/index.js'
import User from '../pages/self/user/user.js'
import Layout from '../pages/layout/layout.js'
import Function from '../pages/function/function.js'
import Details from '../pages/details/details.js'
import Intro from '../pages/self/introa/intro/intro.js'
import Set from '../pages/self/set/set.js'
import Login from '../pages/login/login.js'
import ChangePass from '../pages/self/introa/changepass/changepass.js'
import ChangeIn from '../pages/self/introa/changein/changein.js'
import Chat from '../pages/chat/chat.js'
import ChangeName from '../pages/self/introa/changename/changename.js'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {path: '/',element: <Index />},
    {path: '/index', element: <Index />, children:[
        {path: 'user', element: <User />},
        {path: 'layout', element: <Layout />},
        {path: 'function', element: <Function />},
    ]},
    {path: '/details', element: <Details />},
    {path: '/intro', element: <Intro />},
    {path: '/set', element:<Set />},
    {path: '/login', element:<Login />},
    {path: '/changepass', element:<ChangePass />},
    {path: '/changein', element:<ChangeIn />},
    {path: '/changename', element:<ChangeName />},
    {path: '/chat', element:<Chat />}
])
export default router