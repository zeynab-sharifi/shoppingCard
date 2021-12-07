<template>
    <ul>
      <li v-for="(p,id) in products" :key="id">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>
            <span>${{ p.price }}</span>
            <p class="card-text">{{ p.pra }}</p>
            <button :disabled="!p.inventory" @click="addToCart(p)" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </li>
    </ul>
</template>
<script>
import { mapGetters , mapActions } from 'vuex';
  export default{
    computed : {
        ...mapGetters({
            products :'allProducts'
        })
    },
    methods : {
            ...mapActions([
                'addToCart'
            ])
        },
    created(){
      this.$store.dispatch('getAllProducts');
    }
  }
</script>