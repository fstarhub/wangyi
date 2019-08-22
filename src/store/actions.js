import {getList} from '../api/index'

import {SEARCH_KEYWORD} from './mutation-types'

export default {
  async getMessage ({commit},{searchInput}){
   
    const result=await getList(searchInput)
  //  debugger
      let a = result.data
    if(a.code==='200'){
      const searchContent=a.data
      commit(SEARCH_KEYWORD,{searchContent})
    }
  }
}