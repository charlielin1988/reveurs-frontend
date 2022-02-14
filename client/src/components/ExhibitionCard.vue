<template>
  <div class="exhibition-container">
    <div class ="exhibition-card" @click="selectExhibition(exhibition.id)">
      <div class="info-wrapper">
        <div class="-image-wrapper">
        <img :src="exhibition.picture" class="exhibition-picture" />
      </div>
        <h3>{{ exhibition.title }}</h3>
        <p> {{ exhibition.description }} </p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionCard',
  props: {
    exhibition: {}
  }
  
}


</script>

<style>
.exhibition-picture {
  max-height:20vh;
  max-width:15vh;
}

</style>