import Vue from 'vue'
import Vuex from 'vuex'
import layoutStore from './layoutStore'
Vue.use(Vuex)

export const state = () => ({
    testStatus: "test123"
})

export const getters = {
    get_status: state => state.testStatus
}

export const actions = {
    testThis() {
        console.log(this)
    },
    getStatus({ commit }, status) {
        commit('setStatus', status);
    }
}
export const mutations = {
    setStatus(state, status) {
        state.testStatus = status;
    }
}

// Nuxt 3 直接把 store封裝
// const store = () => {
//     return new Vuex.Store({
//         state,
//         getters,
//         mutations,
//         actions
//     })
// }

// export default store