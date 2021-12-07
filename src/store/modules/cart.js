

const state = {
    added : [],
    checkOutState : null
};


const mutations ={
    addToCart(state , {id }){
        state.checkOutState = null;
        const record = state.added.find(p => p.id === id);
        if(!record){
            state.added.push({
                id,
                quanitiy : 1
            })
        }else{
            record.quanitiy++;
        }
    }
}

export default{
    state,
    mutations
}