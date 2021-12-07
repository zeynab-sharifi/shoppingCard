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
    
    
});

export default store;