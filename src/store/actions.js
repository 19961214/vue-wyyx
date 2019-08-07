import {reqTopic} from '../api/index';
import {REQ_DATA} from './mutation-type'
export default {
  async reqData({ commit },page,size){
    const result = await reqTopic(page,size)
    
    if(result){
      console.log(result)
      const a = result.data.result.reduce((next,item) => {
        return next = [...next,...item.topics]
      },[]);
      commit(REQ_DATA,a)
    }
  }
}