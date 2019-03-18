import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import exportAction from '~/mainAction/basicAction/basicDetailAction';
import { callLogin } from '~/actions/api'

const defaultState = () => ({
    collapse_flag: false,
    click_count: 0
})

const defaultGetters = {
    menu_collapse_flag: state => state.collapse_flag,
    click_count_desc: state => `已點擊${state.click_count}次`
}

const defaultActions = {
    async login({ commit }, data) {
        const myData = {
            ...data, "site_id": 1, "ip_data": { "as": "AS3462 Chunghwa Telecom Co., Ltd.", "city": "台北市", "country": "台湾", "countryCode": "TW", "isp": "HINET", "lat": 25.0478, "lon": 121.5318, "org": "Chunghwa Telecom Co. Ltd.", "query": "60.251.26.1", "region": "TPE", "regionName": "台北市", "status": "success", "timezone": "Asia/Taipei", "zip": "" }, "system": "win/chrome", "host": "localhost:3006", "device": 1
        }
        const res = await callLogin(myData);
    },
}
const defaultMutations = {
    increase_count(state) {
        state.click_count = state.click_count + 1;
    }
}

const layoutStore = new exportAction({
    storeName: 'layoutStore',   /** store 名稱 */
    defaultState, defaultGetters, defaultActions, defaultMutations
});

const { state, getters, actions, mutations } = layoutStore
export { state, getters, actions, mutations }
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