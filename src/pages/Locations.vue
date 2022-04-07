<template>
<div>
  
  <h2>Locations</h2>
    <div class="add-location-button">
        <a href="http://localhost:8080/addlocationform">
      <button class="add-location">Add Location</button>
        </a>
      </div>
    <section class ="location-card-container">
      <LocationCard v-for="location in locations" :key="location.id" :location="location" @selectLocation="selectLocation" @handleDelete="handleDelete"
      />
      
      
    </section>
    
  
  
</div>

</template>
<script>
import axios from 'axios'
import LocationCard from '../components/LocationCard.vue'




// const API_URL=process.env.VUE_APP_BASE_URL

export default {
  name: 'Locations',
  components: {LocationCard},
  data: () => ({
    locations: [],
    location: {}
    
    
  }),
  mounted(){ this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await axios.get('http://localhost:8000/locations')
      this.locations = res.data
      //  console.log(res.data)
    },
    selectLocation(locationId) {
      this.$router.push(`/exhibitions-by-location/${locationId}`)
    },
    handleDelete(id) {
      this.location = this.location.filter(location => location.id !==id)
    }
  }
}
</script>

<style>
.locations {
color: wheat;
}
.location-card-container {
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  align-items:baseline;
  justify-items:center;
  margin-left:10%;
  margin-right:10%;
  text-align:center;
}
h2 {
  text-align:center;
  margin-top:5%;
  margin-bottom:3%;
}
.add-location-button {
  width:100%;
  margin-left:46%;
  margin-top:0%;
  
}
.add-location {
  height: 8vh;
  width: 8vw;
  font-family: 'Lancelot', cursive;
  font-size:1.5em;
  font-weight:bolder;
  background-color:rgba(0, 0, 0, 0);
  border-radius:50%;
  color:wheat;
  }
  

</style>