let GithubUseCardComponent = {
    template: '#github-user-card-template',
    props: {
        username: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            user: null
        }
    },
  
    async created() { 
        
        try{
            const response = await axios.get(`https://api.github.com/users/${this.username}`)
            this.user = response.data

        } catch (error){
            console.log('error')
        }
    }
}

new Vue({
    el: '#app',
    data: {
        usernames: ['diegodevg', 'hootlex', 'rahaug', 'sdras', 'akryum']
    },
    components: {
        GithubUserCard: GithubUseCardComponent
    }
})