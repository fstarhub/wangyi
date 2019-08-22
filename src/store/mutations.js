//直接跟新状态数据的对象
import {SEARCH_KEYWORD} from './mutation-types'

export default {
  [SEARCH_KEYWORD](state,{searchContent}){
    state.searchContent=searchContent
  }
}