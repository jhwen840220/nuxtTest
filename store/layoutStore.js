import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import exportAction from '~/mainAction/basicAction/basicDetailAction';
import { callLogin } from '~/actions/api'

export const state = () => ({
    collapse_flag: false,
    click_count: 0,
    token: '',
    list: []
})

export const getters = {
    menu_collapse_flag: state => state.collapse_flag,
    click_count_desc: state => `已點擊${state.click_count}次`
}

export const actions = {

}
export const mutations = {
    increase_count(state) {
        state.click_count = state.click_count + 1;
    }
}

// const layoutStore = new exportAction({
//     storeName: 'layoutStore',   /** store 名稱 */
//     defaultState, defaultGetters, defaultActions, defaultMutations
// });

// const { state, getters, actions, mutations } = layoutStore
// export { state, getters, actions, mutations }



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