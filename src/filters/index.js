import Vue from 'vue'

Vue.filter('date-format',(value)=>{
  if(value < 10000){
    const result = value / 1000;
    //toFixed保留几位小数
    return result.toFixed(1) + 'k'
  }else {
    const result = value / 10000;
    return result.toFixed(1) + 'w'
  }
});