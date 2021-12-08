import shop from "../../api/shop";

const state = {
    added : [],
    checkoutStatus : null
};
const getters = {
    checkoutStatus : state => state.checkoutStatus
}

const actions = {
    checkout({ commit , state } , products) {
        const savedCartItems = [...state.added];
        commit('checkoutRequest')
        shop.buyProducts(
            products,
            () => commit('checkoutSuccess'),
            () => commit('checkoutFailure' , { savedCartItems }))
    }
}

const mutations ={
    addToCart(state , {id }){
        state.checkoutStatus = null;
        const record = state.added.find(p => p.id === id);
        if(!record){
            state.added.push({
                id,
                quantity : 1
            })
        }else{
            record.quantity++;
        }
    },
    checkoutRequest(state){
        state.added = [];
        state.checkOutState = null;
    },
    checkoutSuccess(state){
        state.checkOutState = 'successfull';
    },
    checkoutFailure(state){
        state.added = savedCartItems;
        state.checkOutState = 'failed'
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}