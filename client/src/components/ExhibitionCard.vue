<template>
  <div class ="exhibition-card" @click="selectExhibition(exhibition.id)">
    <div class="-image-wrapper">
      <img :src="exhibition.picture" class="exhibition-picture" />
    </div>
    <div class="info-wrapper">
      <h3>{{ exhibition.title }}</h3>
    
      <p> {{ exhibition.description }} </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'ExhibitionCard',
  props: 
  {
  exhibition: {}
  
}
}

</script>