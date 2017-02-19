import * as types from './types.js'
import getters from './getters.js'

let state ={
    count:0
}

const mutations = {
    [types.INCREMENT]:(state)=>{
        state.count++;
    },
    [types.DECREMENT]:(state)=>{
        state.count--;
    }
}

export default{
    state,
    getters,
    mutations
}