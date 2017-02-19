import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    count: 0
};

const getters = {
    count: (state)=>{
        return state.count;
    }
}

const mutations = {
    increment:(state)=>{
        state.count++;
    },
    decrement:(state)=>{
        state.count--;
    }
}


const actions = {
    increment:({commit})=>{
        commit('increment');
    },
    decrement:({commit})=>{
        commit('decrement');
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions    
});