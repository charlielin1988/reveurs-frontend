<template>
<div>Home
  <div class='locations'>
    <h2>Locations</h2>
    <section class ="location-card-container">
      <LocationCard v-for="location in locations" :key="location.id" :location="location" @click="selectLocation(location.id, location.name)"/>
    </section>
  </div>
</div>

</template>
<script>
import axios from 'axios'
import LocationCard from '../components/LocationCard.vue'
//  const API_URL = process.env.VUE_APP_BASE_URL

export default {
  name: 'Home',
  components: {LocationCard},
  data: () => ({
    locations: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted: async function(){
    await this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await axios.get('http://localhost:8000/locations')
      this.locations = res.data
      console.log(res.data)
    }
  }
  }
</script>
