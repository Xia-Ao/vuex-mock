/**
 * Created by XiaAo on 2017/8/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

// 应用初始状态
const state = {
  count: 5
}

//定义所需的mutations
const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
};

//创建store实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
