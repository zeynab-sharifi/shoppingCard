<template>
    <div class="card">
        <h2>Card</h2>
        <p v-show="!products.length"><i>please add some products to cart.</i></p>
        <hr>
        <ul>
            <li v-for="(p , index) in products" :key="index">
                {{ p.title }} - ${{ p.price }} x {{ p.quantity }}
            </li>
        </ul>
        <p>Total : ${{ total }}</p>
        <p>
            <button :disabled="!products.length">checkout</button>
        </p>
        <p v-show="checkOutState">checkout {{ checkOutState }}</p>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

        export default{
            computed :{
                ...mapGetters({
                    products : 'cartProducts',
                    checkOutState : 'checkOutState'
                    
                }),
                total(){
                    return this.products.reduce((total , p) =>{
                        return total + p.price * p.quantity ;
                    },0)
                }
            }
        }
</script>
<style scoped>
    .card{
        display: flex;
        margin: 3rem auto;
        width: 80%;
    }
</style>