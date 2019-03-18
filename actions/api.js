import { post } from './mainAction'

export const callLogin = (postData, req) => post(`login`, postData, req)

/**
 * 取得遊戲列表 [POST]
 */

export const callGetGameList = (postData, req) => post(`game_list`, postData, req)

