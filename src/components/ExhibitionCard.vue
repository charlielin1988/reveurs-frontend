<template>
  <div class="exhibition-container">
    <div class ="exhibition-card" >
      <div class="info-wrapper">
        <div class="-image-wrapper">
        <img :src="exhibition.picture" class="exhibition-picture" />
        </div>
        <div class="ex-title-wrapper" >
          <h3 class="exhibition-title">{{ exhibition.title }}</h3>
        <!-- <p> {{ exhibition.description }} </p> -->
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>


export default {
  name: 'ExhibitionCard',
  props: { 'exhibition':{} },
  data: () => ({
    description: '',
    location: '',
    picture: '',
    title: ''

  }),

methods: {
selectExhibition(exhibitionId) {
    this.$emit('selectExhibition', exhibitionId)
      }
}
}

</script>

<style>
.exhibition-picture {
  max-height: 20vh;
  max-width: 20vw;
  box-shadow: .5em .5em .5em rgba(245, 222, 179, 0.371)
}
.exhibition-title {
  padding-left: 1em;
  padding-top: .5em;
}
</style>