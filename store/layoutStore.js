import Vue from 'vue'
import Vuex from 'vuex'
import * as root from "./index.js";
Vue.use(Vuex)

export const state = () => ({
    collapse_flag: false
})

export const getters = {
    menu_collapse_flag: state => state.collapse_flag
}

export const actions = {
    test123(a) {
        console.log(a, root)
    },
    toggle_menu({ commit, state }) {
        commit('set_collapse_flag', !state.collapse_flag);
    },
    close_menu({ commit }) {
        commit('set_collapse_flag', false);
    },
}
export const mutations = {
    set_collapse_flag(state, status) {
        state.collapse_flag = status
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