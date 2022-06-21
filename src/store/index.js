import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsCart: [],
  },
  getters: {
  },
  mutations: {
    pushToCart: (state, payload) => state.productsCart.push(payload),
    increaseProduct: (state, payload) => state.productsCart[payload].quantity ++,
    removeFromCart: (state, payload) => state.productsCart.push(payload),
  },
  actions: {
    addProductToCart: ({commit, state}, {product}) => {
      const productInCart = state.productsCart.find(e => e.id === product.id)
      if(productInCart){
        const productIndex = state.productsCart.indexOf(productInCart);
        return commit('increaseProduct', productIndex);
      }
      
      product.quantity = 1;
      commit('pushToCart',product)
      
      console.log(commit);
      console.log(state);
      console.log(product);
    }
  },
  modules: {
  }
})
