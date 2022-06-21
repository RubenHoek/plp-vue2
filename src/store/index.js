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
    removeFromCart: (state, payload) => state.productsCart.splice(payload, 1),
    decreaseProduct: (state, payload) => state.productsCart[payload].quantity --,
  },
  actions: {
    // ToDo: make function so there is no duplicated code here. 
    addProductToCart: ({commit, state}, {product}) => {
      const productInCart = state.productsCart.find(e => e.id === product.id);
      if(productInCart){
        const productIndex = state.productsCart.indexOf(productInCart);
        return commit('increaseProduct', productIndex);
      }
      
      product.quantity = 1;
      commit('pushToCart',product)
    },
    removeProductFromCart: ({ commit, state}, {product}) => {
      const productInCart = state.productsCart.find(e => e.id === product.id);
      if(productInCart){
        const productIndex = state.productsCart.indexOf(productInCart);
        if(productInCart.quantity > 1){
          return commit('decreaseProduct', productIndex);
        }
        return commit('removeFromCart', productIndex);
      }
      // ToDo: what to do when there is no product to remove?
      console.log('🎈this product is not in the cart!');
    }
  },
  modules: {
  }
})
