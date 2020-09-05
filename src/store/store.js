import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// set vuex
export default new Vuex.Store({
  state: {
    error: false,
    campaigns: []
  },
  getters: {
    GET_campaigns: state => {
      return state.campaigns
    }
  },
  mutations: {
    SET_campaigns(state, data){
      state.error = false
      state.campaigns = data
    },
    SET_error(state, data){
      state.error = data      
    }
  },

  actions: {
    async FETCH_campaigns({commit}){
      try{
        let {data, status} = await axios.get('https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73')
        commit('SET_campaigns', data)
      }
      catch(err){        
        commit('SET_error', true)
      }
      
    }
  }
});