export default {
    actions: {
        async authUser(context, formData) {
            let response = await fetch(`http://127.0.0.1:8000/api/authorization/users/login`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                let token = await response.json()
                context.commit('assignToken', token)
                console.log(token)
                context.commit('setAuth', true)
                return true
            }
            else {
                context.commit('setAuth', false)
                return false;
            }
        },
        async fetchUserData(context) {
            let response = await fetch(`http://127.0.0.1:8000/api/authorization/user`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                method: 'GET',
            })
            if (response.ok) {
                let userdata = await response.json()
                context.commit('assignUserData', userdata)
                context.commit('setAuth', true)
                return true
            }
            else {
                context.commit('setAuth', false)
                return false
            }
        },
    },
    mutations: {
        assignToken(state, token) {
            localStorage.setItem('token', token)
        },
        assignUserData(state, userdata) {
            state.userData = userdata
        },
        setAuth(state, bool) {
            state.auth = bool
        }
    },
    state: {
        auth: false,
        userData: {},
    },
    getters: {
        token() {
            return localStorage.getItem('token')
        },
        isAuth(state) {
            console.log()
            return state.auth
        },
    }
}