<template>
    <ul>
      <li v-for="p in products" :key="p.id">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>
            <p class="card-text">{{p.price}}</p>
            <a href="#" :disabled="!p.inventory" @click="addToCard(p)" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </li>
    </ul>
</template>
<script>
import { mapGetters } from 'vuex';
  export default{
    computed : {
      ...mapGetters({
          products :'allProducts'
      })
    },
    methods:{
      ...map
    },
    created(){
      this.$store.dispatch('getAllProducts');
    }
  }
</script>