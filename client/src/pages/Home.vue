<template>
<div>Home
  <div class='locations'>
    <h2>Locations</h2>
    <section class ="location-card-container">
      <LocationCard v-for="location in locations" :key="location.id" :location="location" @selectLocation="selectLocation"/>
    </section>
  </div>
</div>

</template>
<script>
import axios from 'axios'
import LocationCard from '../components/LocationCard.vue'
// const API_URL=process.env.VUE_APP_BASE_URL

export default {
  name: 'Home',
  components: {LocationCard},
  data: () => ({
    locations: [],
    searchQuery: '',
    searchResults: [],
    searched: false,
    exhibitions: []
    // newLocation: null
  }),
  mounted: async function(){
    await this.getLocations()
    await this.getExhibitions()
  },
  methods: {
    async getLocations() {
      const res = await axios.get('http://localhost:8000/locations')
      this.locations = res.data
      console.log(res.data)
    },
    
    async getExhibitions() {
      const res = await axios.get('http://localhost:8000/exhibitions')
      this.exhibitions = res.data
    },

    getSearchResults(e) {
      e.preventDefault()
      const res = this.exhibitions.filter(exhibition => exhibition.title.toLowerCase())
      this.searchResults = res
      this.searched = true
      this.searchQuery = ''
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },

    selectLocation(locationId) {
      this.$router.push(`/exhibitions/${locationId}`)
      console.log(locationId)
    },
    
    selectExhibition(exhibitionId) {
      this.$router.push(`/details/${exhibitionId}`)
    }
  }
  }
</script>
