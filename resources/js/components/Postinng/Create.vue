<template>
    <div class="container">
      <form @submit.prevent="submit_form">
          Post title:
          <br/>
          <input type="text" v-model="fields.title" id="" class="form-control">
          <br/>
          Post Text:
          <br/>
          <textarea class="form-control" v-model="fields.post_text" rows="10"></textarea>
          <br/>
          Category:
          <select  class="form-control" v-model="fields.category_id">
              <option  v-for="category in categories" :value="category.id">{{category.name}}</option>
          </select>
          <br/>
          <input type="submit" value="Save post" class="btn btn-primary">
      </form>
      
    </div>
</template>

<script>

export default {
    data(){
        return{
            categories: {} ,
            fields: {
                title:'',
                post_text:'',
                category_id: ''
            }
        }
    },
   mounted(){
         axios.get('api/categories')
				.then(response => {
					this.categories = response.data.data;
				});
   }, 
   methods: {
       submit_form(){
           console.log('test');
              axios.post('api/posts',this.fields)
				.then(response => {
					this.$router.push('/');
				});
       }
   }

}


</script>
