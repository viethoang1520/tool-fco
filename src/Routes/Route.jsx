import Home from "../Pages/Home/Home"
import Service from "../Pages/Service/Service"
import Support from "../Pages/Support/Support"

const publicRoutes = [
     { path: '/', component: Home },
     { path: '/service', component: Service },
     {path: 'support', component: Support}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }