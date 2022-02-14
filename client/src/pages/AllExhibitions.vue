<template>
  <div class="view-locations">
    <h1>Exhibitions</h1>
    
    <div class="exhibitions-container">
      <ExhibitionCard v-for="exhibition in exhibitions" :key="exhibition.id" :exhibition="exhibition" @click.native="selectExhibition(exhibition.id)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ExhibitionCard from '../components/ExhibitionCard.vue'

export default {
  name: 'AllExhibitions',
  components: {
    ExhibitionCard
  },
  data: () => ({
    exhibitions: [],
    location: ''
  }),
  mounted: async function () {
    await this.getExhibitions()
  },
  methods: {
    async getExhibitions() {
      const res = await axios.get(`http://localhost:8000/exhibitions`)
      this.exhibitions = res.data
      // console.log(res.data)
    },
    
    selectExhibition(exhibitionId) {
      this.$router.push(`/details/${exhibitionId}`)
    }
  }
}
</script>

<style>
.view-locations {
  color: wheat;
  background-color: black;
  
}
.exhibitions-container {
  display: grid;
  grid-template-rows: 1fr;
  text-align:center;
  align-items:baseline;
  justify-content:space-around;
}
</style>

