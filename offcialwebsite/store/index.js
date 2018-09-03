import Vuex from 'vuex'
import Vue from 'vue'
import state from './state.js'
import * as muations from './muation.js'
import * as actions from './action.js'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state,
    muations,
    actions
})
export default store