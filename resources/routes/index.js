import postinngIndex from '../js/components/Postinng/Index.vue'
import postsCreate from '../js/components/Postinng/create.vue'
import postsEdit from '../js/components/Postinng/edit.vue'

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
            {
                path: '/edit/:id',
                component: postsEdit,
                name: 'posts.edit'
            }
        ]
  
}

