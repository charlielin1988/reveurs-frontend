<template>
<div>Home
  <div class='locations'>
    <LocationCard />
  </div>
</div>

</template>
<script>
import axios from 'axios'
import LocationCard from '../components/LocationCard.vue'
// const API_URL = process.env.VUE_APP_BASE_URL

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
      const res = await axios.get(`http:localhost:8000/locations`)
      this.locations = res
      console.log(res)
    }
  }
  }
</script>
