import Vuex from 'vuex'
import localUser from './modules/localUser'

export default new Vuex.Store({
    modules: {
        localUser,
    }
})