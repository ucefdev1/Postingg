<template>
    <div class="container">
      <form @submit.prevent="submit_form">
          Post title:
          <br/>
          <input type="text" v-model="fields.title" id="" class="form-control">
          <div class="alert-danger p-1" v-if="errors && errors.title">
              {{errors.title[0]}}
          </div>
          <br/>
          Post Text:
          <br/>
          <textarea class="form-control" v-model="fields.post_text" rows="10"></textarea>
                 <div class="alert-danger p-1" v-if="errors && errors.post_text">
              {{errors.post_text[0]}}
          </div>
          <br/>
          Category:
          <select  class="form-control" v-model="fields.category_id">
              <option  v-for="category in categories" :value="category.id">{{category.name}}</option>
          </select>
             <div class="alert-danger p-1" v-if="errors && errors.category_id">
              {{errors.category_id[0]}}
          </div>
          <br/>
          Thumbnail:
          <input type="file" @change="select_file">
          <br/>
          <input type="submit" 
          :value="form_submitting ? 'saving post...' : 'save post' " 
          :disabled="form_submitting"
          class="btn btn-primary">
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
                category_id: '',
                thumbnail:null
            },
            errors: {
            },
            form_submitting: false
        }
    },
   mounted(){
         axios.get('/api/categories')
				.then(response => {
					this.categories = response.data.data;
				});


                 axios.get('/api/posts/'+ this.$route.params.id)
				.then(response => {
					this.fields = response.data.data;
				});
   }, 
   methods: {
       submit_form(){
           //console.log('test');
          
              console.log('tst');

           this.form_submitting = true;

           

              axios.put('/api/posts/'+this.$route.params.id,this.fields)
				.then(response => {
                   // this.$swal('Post Updated Successfully')
                //   alertify.alert("This is an alert dialog.", function(){alertify.message('OK'); });
                this.$notify('Post Updated Successfully');
					this.$router.push('/');
                               this.form_submitting = false;
				}).catch(error => {
                    if(error.response.status === 422){
                                           // this.$swal({icon:'error',title: 'Error happened'})

                        this.errors = error.response.data.errors;

                    }
                this.form_submitting = false;

                });
       },
       select_file(event){
               this.fields.thumbnail = event.target.files[0];
           }
   }

}


</script>
