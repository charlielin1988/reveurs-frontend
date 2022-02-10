<template>
<div class ="exhibition-card">
  <div class="-image-wrapper">
    <!-- <img class="card-image" :src="vestment.image" /> -->
  </div>
  <div class="info-wrapper">
    <h3>{{ exhibition.title }}</h3>
    <img :src="exhibition.picture" class="exhibition-picture" />
  </div>
</div>
</template>

<script>
export default {
  name: 'ExhibitionCard',
  props: ['exhibition']
}
</script>