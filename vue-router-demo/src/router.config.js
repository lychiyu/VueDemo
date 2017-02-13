import Home from './components/Home.vue'
import User from './components/User.vue'
import News from './components/News.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'


export default{
      routes:  [
        {path:'/home',component:Home},
        {path:'/user/:id',component:User,
            children:[
                {
                path:'profile',
                component:UserProfile
            },
            {
                path:'posts',
                component:UserPosts
            }
            ]
        },
        {path:'/news',component:News}    
    ]
}