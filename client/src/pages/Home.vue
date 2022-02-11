<template>
<div>Home
  <div class = "search">
  <form @submit="getSearchResults" >
      <input
      type="text"
      :value="searchQuery"
      @input="handleChange"
      />
      <button type="submit">Find Exhibition</button>
  </form>

    <h2 v-if="searched">Exhibitions</h2>
    <section class="search-results">

      <ExhibitionCard v-for="exhibition in searchResults" :key="exhibition.id" :exhibition="exhibition" @selectExhibition="selectExhibition" />
      </section>
    </div>

  <div class='locations'>
    <h2 v-if="!searched">Locations</h2>
    <section class ="location-card-container">
      <LocationCard v-for="location in locations" :key="location.id" :location="location" @selectLocation="selectLocation" @handleDelete="handleDelete"/>
      
    </section>
  </div>
  
</div>

</template>
<script>
import axios from 'axios'
import LocationCard from '../components/LocationCard.vue'
import ExhibitionCard from '../components/ExhibitionCard.vue'
// const API_URL=process.env.VUE_APP_BASE_URL

export default {
  name: 'Home',
  components: {LocationCard, ExhibitionCard},
  data: () => ({
    locations: [],
    searchQuery: '',
    searchResults: [],
    searched: false,
    exhibitions: []
    
  }),
  mounted(){ this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await axios.get('http://localhost:8000/locations')
      this.locations = res.data
      console.log
    },
    
    async getExhibitions() {
      const res = await axios.get('http://localhost:8000/exhibitions')
      this.exhibitions = res.data
      
    },
  
    getSearchResults(e) {
      e.preventDefault()
      const res = this.exhibitions.filter(exhibition => exhibition.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      this.searchResults = res
      this.searched = true
      this.searchQuery = ''
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },
   

    selectLocation(locationId) {
      this.$router.push(`/exhibitions/${locationId}`)
    
    },
    
    selectExhibition(exhibitionId) {
      this.$router.push(`/details/${exhibitionId}`)
    },

     handleDelete(id) {
      this.location = this.location.filter(location => location.id !==id)
    }
    
  }
  }
</script>
