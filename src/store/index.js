import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products.js'
import basket from './modules/basket.js'

export const store = new Vuex.Store({
	modules: {
		products,
        basket
	},
	strict: process.env.NODE_ENV !== 'production'
})
