<template>
  <div class = "reviews-card">
  
    <div class="-image-wrapper">
      <!-- <img :src="review.picture" class="exhibition-picture" /> -->
    </div>
    <div class="info-wrapper">
      <h3>{{ review.title }}</h3>
    
      <p> {{ review.content }} </p>
    </div>
</div>

</template>

<script>
  export default {
  name: 'ReviewCard',
  props: 
  ['review']
  
}



</script>