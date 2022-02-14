<template>
<div>
  
  <div class='locations'>
    <h2>Locations</h2>
    <section class ="location-card-container">
      <LocationCard v-for="location in locations" :key="location.id" :location="location" @selectLocation="selectLocation" @handleDelete="handleDelete"
      />
      
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
    searchResults: null,
    searched: false,
   
    
  }),
  mounted(){ this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await axios.get('http://localhost:8000/locations')
      this.locations = res.data
      //  console.log(res.data)
    },
    
   
   },
    selectLocation(locationId) {
      this.$router.push(`/exhibitions/${locationId}`)
    
    },
    
    

     handleDelete(id) {
      this.location = this.location.filter(location => location.id !==id)
    },
    
  }
  
</script>

<style>
body {
  color:white;
}
</style>