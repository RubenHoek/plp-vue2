import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsInCart: [],
    itemCount: 0,
  },
  getters: {
  },
  mutations: {
    pushToCart: (state, payload) => state.productsInCart.push(payload),
    increaseProduct: (state, payload) => state.productsInCart[payload].quantity ++,
    removeFromCart: (state, payload) => state.productsInCart.splice(payload, 1),
    decreaseProduct: (state, payload) => state.productsInCart[payload].quantity --,
    setItemCount: (state, payload) => state.itemCount = payload
  },
  actions: {
    // ToDo: make function so there is no duplicated code here. 
    addProductToCart: ({commit, state, dispatch}, {product}) => {
      const productInCart = state.productsInCart.find(e => e.id === product.id);
      if(productInCart){
        const productIndex = state.productsInCart.indexOf(productInCart);
        commit('increaseProduct', productIndex);
        return dispatch('changeItemCount');
      }
      
      product.quantity = 1;
      commit('pushToCart',product);
      dispatch('changeItemCount');
    },
    removeProductFromCart: ({ commit, dispatch, state}, {product}) => {
      const productInCart = state.productsInCart.find(e => e.id === product.id);
      if(productInCart){
        const productIndex = state.productsInCart.indexOf(productInCart);
        if(productInCart.quantity > 1){
          commit('decreaseProduct', productIndex);
          return dispatch('changeItemCount');
        }
        commit('removeFromCart', productIndex);
        return dispatch('changeItemCount');
      }
      // ToDo: what to do when there is no product to remove?
      console.log('🎈this product is not in the cart!');
    },
    // ToDo: is there an easier way to change the itemCount when quantity property is changed?
    // (vue does not auto detect the prop change the way the code is set up now, but calling this function every time is not very pretty).
    changeItemCount: ({commit, state}) => {
      const quantities = state.productsInCart.map(e => e.quantity);
      const total = quantities.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
      return commit('setItemCount', total);
    }
  },
  modules: {
  }
})
