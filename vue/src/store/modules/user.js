export default {
    actions: {
        async fetchUser(context, username) {
            let response = await fetch('http://127.0.0.1:8000/api/userbyusername/' + username)
            if (response.ok) {
                let user_data = await response.json()
                context.commit('assignUserData', user_data)
            }
        },
        async fetchUserPosts(context, userid) {
            let response = await fetch('http://127.0.0.1:8000/api/postsbyuserid/' + userid)
            if (response.ok) {
                let posts = await response.json()
                context.commit('assignUserPosts', posts)
            }
        },
        async fetchUserFriends(context, userid) {
            let response = await fetch('http://127.0.0.1:8000/api/userfriends/' + userid)
            if (response.ok) {
                let friends = await response.json()
                context.commit('assignUserFriends', friends)
            }
        }
    },
    mutations: {
        assignUserData (state, user_data) {
            state.userData = user_data
        },
        assignUserPosts (state, posts) {
            posts.forEach(post => {
                post['author'] = state.userData.username
            });
            state.userPosts = posts
        },
        assignUserFriends(state, friends_data) {
            state.userFriends = friends_data
        },
    },
    state: {
        userData: {},
        userPosts: {},
        userFriends: {},
    },
    getters: {
        userData(state) {
            return state.userData
        },
        userPosts(state) {
            return state.userPosts
        },
        userFriends(state) {
            return state.userFriends
        },
    }
}