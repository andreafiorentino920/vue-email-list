const app = new Vue({
    el:"#root",
    data:{
        emails:[]
    },
    methods:{
    },
    mounted(){
        for(var i = 1; i <=10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                    this.emails.push(response.data.response)
                    });
        }            
    }    
})
console.log(this.emails)
