<template>
  <div class="location-card" @click="selectLocation(location.id)">
    <div class="image-wrapper">
    </div>
    <div class="info-wrapper">
      <h3>{{ location.city }}</h3>
    </div >
    <div class="image-wrapper">
      <img class="card-image" :src="location.location_picture" :alt="location.picture" />
    </div>
   
  </div>
</template>

<script>
export default {
  name:'LocationCard',
  props: ['location'],
  methods: {selectLocation(locationId){
    this.$emit('selectLocation', locationId)
  }}

}
</script>