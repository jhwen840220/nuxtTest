import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const actions = {
    async onSubmit({ commit }, { api, postData }) {
        const res = await api(postData)

        if (res && res.header.status === "100") {
            return actions.submitSuccess({ commit }, res);
        } else {
            return await Promise.reject({ text: res.header.desc });
        }
    },
    async submitSuccess({ commit }, res) {
        return await Promise.resolve({ text: 'success' })
    },


    async getList({ commit, rootState }, { api, postData, storeName }) {
        const res = await api(postData)
        if (res && res.header.status === "100") {
            const data = res.body;
            const newStoreState = actions.formatResData({ commit }, data);
            commit('update_list', { storeName: 'layoutStore', list: newStoreState.list }, { root: true })
        } else {
            return await Promise.reject({ text: res.header.desc });
        }
    },
    formatResData({ commit }, resData) {
        return {
            list: resData['data'],
            total: resData.total_count
        }
    }
}
