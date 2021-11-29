<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="title-card">
          <h1>card shopping</h1>
          <hr>
        </div>
      </div>
    </div>
    <div class="container">
     <ProduoctList></ProduoctList>
    </div>
  </div>
  
</template>

<script>
import ProduoctList from "./components/ProduoctList.vue"
export default {
  components : {
    ProduoctList
  },
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>
  .title-card{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 0;
  }
  .title-card h1{
    margin: 0 auto;
  }
</style>
