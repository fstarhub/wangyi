//多个接口请求函数的模块 结果promise

// import ajax from './ajax'
import axios from 'axios'
let Base = '/api'
export const getList=(searchInput)=>axios({
  method:'GET',
  url:`${Base}/xhr/search/searchAutoComplete.json?keywordPrefix=${searchInput}`
})