<template>
  <div class="exhibitions-all">
    <h1 class="exhibitions">Exhibitions</h1>
   
    <section class="exhibitions-info">
      <div class="exhibitions-container" v-for="exhibition in exhibitions" :key="exhibition.id" >
      <ExhibitionCard :exhibition="exhibition" @click.native="selectExhibition(exhibition.id)" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import ExhibitionCard from '../components/ExhibitionCard.vue'

export default {
  name: 'ViewExhibitions',
  components: {
    ExhibitionCard
  },
  data: () => ({
    exhibitions: [],
    location: '',
    
  }),
  mounted: async function() {
  await this.getExhibitionsByLocation()
  this.getLocation()
  },
  methods: {
  async getExhibitionsByLocation() {
      const locationId = parseInt(this.$route.params.location_id)
      const res = await axios.get(`http://localhost:8000/locations/${locationId}`)
      const exhibition_data = res.data.exhibitions
      const response = await axios.get(exhibition_data)
      let exhibitions = []
      exhibitions.push(response.data)
      this.exhibitions=exhibitions
      console.log(response.data)
    },
    getLocation () {
      this.location = this.$route.params.location_id
    },
    selectExhibition(exhibitionId) {
      this.$router.push(`/details/${exhibitionId}`)
    }

    }
    
    
  }

</script>

<style>

</style>

