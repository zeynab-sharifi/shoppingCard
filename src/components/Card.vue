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
        <p>Total : $0.00</p>
        <p>
            <button>checkout</button>
        </p>
        <p>checkout successful</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

    export default{
        computed :{
            ...mapGetters({
                products : 'cartProducts',
                
            })
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