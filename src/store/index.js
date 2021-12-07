import Vue from "vue";
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart'
Vue.use(Vuex);


const store = new Vuex.Store({
    modules : {
        products,
        cart
    },
    actions : {
        addToCart({ commit } , product){
            if(product.inventory > 0){
                commit('addToCart' , {
                    id : product.id
                })
            }
        }
    },
    getters : {
        cartProducts(state) {
            return state.cart.added.map(({ id , quantity}) => {
                const product = state.products.all.find(p => p.id === id)
                return {
                    title : product.title,
                    price : product.price,
                    quantity
                }
            })
        }
    }
    
});

export default store;