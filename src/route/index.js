import Index from '../pages/index/index.js'
import User from '../pages/self/user/user.js'
import Aboutme from '../pages/index/aboutme/aboutme.js'
import Welcome from '../pages/welcome/welcome.js'
// import Function from '../pages/function/function.js'
import Details from '../pages/details/details.js'
import Intro from '../pages/self/introa/intro/intro.js'
import Aboutweb from '../pages/index/aboutweb/aboutweb.js'
import Projects from '../pages/projects/projects.js'
import Rain from '../pages/vfx/rain/rain.js'
import Vfxli from '../pages/vfx/vfxli/vfxli.js'
import Set from '../pages/self/set/set.js'
import Column from '../pages/column/column.js'
import Blogs from '../pages/index/blogs/blogs.js'
import Editor from '../pages/editor/editor.js'
import Regis from '../pages/regis/regis.js'
import Login from '../pages/login/login.js'
import Change from '../pages/vfx/change/change.js'
import Developing from '../pages/index/developing/developing.js'
import ChangePass from '../pages/self/introa/changepass/changepass.js'
import ChangeIn from '../pages/self/introa/changein/changein.js'
import Chat from '../pages/chat/chat.js'
import ChangeName from '../pages/self/introa/changename/changename.js'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {path: '/',element: <Welcome />},
    {path: '/index', element: <Index />, children:[
        {path: 'user', element: <User />},
        {path: 'aboutme', element: <Aboutme />},
        {path: 'blogs', element: <Blogs />},
        {path: 'aboutweb', element: <Aboutweb />},
        {path: 'column', element: <Column />},
        {path: 'developing', element: <Developing />},
        {path: 'vfxli', element: <Vfxli />},
        {path: 'rain', element:<Rain />},
        {path: 'change', element: <Change />},
        {path: 'projects', element: <Projects />},
        // {path: 'function', element: <Function />},
    ]},
    {path: '/welcome', element:<Welcome />},
    {path: '/editor',element:<Editor />},
    {path: '/details', element: <Details />},
    {path: '/intro', element: <Intro />},
    {path: '/set', element:<Set />},
    {path: '/regis', element: <Regis />},
    {path: '/login', element:<Login />},
    {path: '/changepass', element:<ChangePass />},
    {path: '/changein', element:<ChangeIn />},
    {path: '/changename', element:<ChangeName />},
    {path: '/chat', element:<Chat />}
])
export default router