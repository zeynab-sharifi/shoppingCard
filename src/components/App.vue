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
     <produoct-list></produoct-list>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <card></card>
      </div>
    </div>
  </div>
  
</template>

<script>
import Card from "./Card.vue"
import ProduoctList from "./ProduoctList.vue"
export default {
  components : {ProduoctList,Card},
  name: 'app',
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
