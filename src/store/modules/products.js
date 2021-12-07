import shop from "../../api/shop";


const state = {
    all : []
};

const getters = {
    allProducts : state => state.all
};

const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products =>{
            commit('receiveProduct' , { products });
        })
    }
};

// change state
const mutations = {
    receiveProduct(state,{ products }){
        state.all = products;
    },

    // Reduce the number of products and add to cart
    addToCard(state , { id}){
        state.all.find(p => p.id === id).inventory--;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}