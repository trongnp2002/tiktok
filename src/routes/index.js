import HomePage from "src/pages/HomePage"
import Following from "src/pages/Following"
import Profile from "src/pages/Profile"
import { DefaultLayout, HeaderOnly } from 'src/layouts';
import Upload from "src/pages/Upload";

//Public routes
const publicRoutes = [
    {path:'/', component: HomePage},
    {path:'/following', component: Following},
    {path:'/profile', component: Profile, layout: null},
    {path:'/upload', component: Upload, layout: HeaderOnly}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}