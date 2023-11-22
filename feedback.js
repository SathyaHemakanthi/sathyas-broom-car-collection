const app = Vue.createApp({
    data() {
      return{
        comment: '',
        name: '',
        comments: []
      }
    },
    
    methods: {
        setComment(){
            if(this.name == ''){
                alert('You should enter your name')
                return;
            }
            if(this.comment == ''){
                alert('Please enter a comment')
                return;
            }
            this.comments.push({
                name: this.name,
                comment: this.comment
                
            })
        }  
    }
  })
app.mount('#app')