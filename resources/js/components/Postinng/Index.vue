<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th >title</th>
                    <th >text</th>
                    <th >date</th>
                    <th >action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts">
                    <td>{{post.title}}</td>
                    <td>{{post.post_text}}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default{
     data(){
         return {
             posts: []
         }
     },
     mounted(){
         axios.get('/api/posts').then(response =>{
             this.posts = response.data;
         })
     }
}

</script>
