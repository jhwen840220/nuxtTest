import { post } from './mainAction'

/**
 * 取得遊戲列表 [POST]
 */
export const callLogin = (postData, req) => post(`login`, postData, req)
