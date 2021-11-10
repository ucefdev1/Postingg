import postinngIndex from '../js/components/Postinng/Index.vue'
import postsCreate from '../js/components/Postinng/create.vue'

export default {
   
        mode: 'history',
        routes: [
            {
                path: '/',
                component: postinngIndex,
                name: 'posts.index'
            },
            {
                path: '/create',
                component: postsCreate,
                name: 'posts.create'
            },
        ]
  
}

