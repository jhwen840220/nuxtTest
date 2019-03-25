import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { token } from '@/actions/mainAction'
export const state = () => ({
    testStatus: "test123",
    token: "",
    locales: ['zh_tw', 'en'],
    locale: 'zh_tw'
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
    },
    refreshToken({ commit }) {
        commit('update_data', { storeName: 'layoutStore', data: { token: token } });
    }
}
export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
    },
    setStatus(state, status) {
        state.testStatus = status;
    },
    update_data(state, { storeName, data }) {
        Object.keys(data).forEach(item => { state[storeName][item] = data[item]; })
    },
}

// const store = () => {
//     return new Vuex.Store({
//         state,
//         getters,
//         mutations,
//         actions,
//         modules: {
//             layoutStore
//         }
//     })
// }

// export default store