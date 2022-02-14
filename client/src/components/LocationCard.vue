<template>
  <div class = "location-container">
    <div class="location-card" @click="selectLocation(location.id, location.city)">
    <div class="info-wrapper">
      <h3>{{ location.city }}</h3>
      <h4>{{ location.start_date |formatDate }} {{ location.end_date |formatDate }} </h4>
    </div >
    <div class="image-wrapper">
      <img class="card-image" :src="location.location_picture" :alt="location.city" />
    </div>
    <button @click="deleteLocation" class="delete-button">Delete Location</button>
    </div>
    <div class = "updateForm">
        <form @submit="submitForm">
          <input
          type="text"
          :value="city"
          name="city"
          @input="handleUpdate"
          />
          <input
          type="date"
          :value="start_date"
          name="start_date"
          @input="handleUpdate"
          />
          <input 
          type="date"
          :value="end_date"
          name="end_date"
          @input="handleUpdate"
          />
          <input
          type="img_url"
          :value="location_picture"
          name="location_picture"
          @input="handleUpdate"
          />
        
            <button type="submit" >Update Location</button>
        </form>
    </div>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'LocationCard',
  props: {
    location: {}
  },
  data: ()=> ( {
    city: '',
    start_date: '',
    end_date: '',
    location_picture: ''
  }),
  methods: {
    
    async deleteLocation() {
      await axios.delete(`http://localhost:8000/locations/${this.location.id}`,{
        auth: {
          username: 'reveur',
          password: 'magician'
        }
      }) 
      this.$emit('handleDelete', this.location.id)
    },
    handleUpdate(e) {
      this[e.target.name] = e.target.value
      },
    
},
    async submitForm (e) {
      e.preventDefault()
      const updatedLocation =
      {
        "city": this.city,
        "start_date": this.start_date,
        "end_date": this.end_date,
        "location_picture": this.location_picture
      }
      console.log(updatedLocation)
      const res =await axios.put(
        `http://localhost:8000/locations/${this.location.id}`, updatedLocation,
      {
        auth: {
          username: 'reveur',
          password: 'magician'
          }
      }
      )
      console.log(res)
      // this.$router.push('/')
      // this.$router.go()
    },
    selectLocation(locationId) {
    this.$emit('selectLocation', locationId)
      },
    
    }
  

</script>
<style>

.card-image{
 max-height:25vh;
 max-width:25vw;
}
</style>