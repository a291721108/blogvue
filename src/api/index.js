import http from '../utils/http'

// get请求
export function getData(params){

    return http.post('/auth/login',params)
}