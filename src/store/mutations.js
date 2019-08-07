import {REQ_DATA} from './mutation-type'
export default {
  [REQ_DATA](state,data){
    state.datas = data;
  }
}