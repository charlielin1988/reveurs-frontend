<template>
  <div class="location-card" @click="selectLocation(location.id)">
    <div class="image-wrapper">
    </div>
    <div class="info-wrapper">
      <h3>{{ location.city }}</h3>
      <h4>{{ location.start_date }} {{ location.start_date }} </h4>
    </div >
    <div class="image-wrapper">
      <img class="card-image" :src="location.location_picture" :alt="location.picture" />
    </div>
    <button @click="deleteLocation" class="delete-button">Delete Location</button>
    <div class = "updateForm">
      <form>
        <input
        placeholder="picture"
        name="newLocation_picture"
        :value="newLocation_picture"
        type="img_url"
        @input="updateLocation"
        />
      <button @click="updateLocation" class ="update-button">Update Location</button>
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
    async updateLocation (e) {
      e.preventDefault()
       await axios.put(
        `http://localhost:8000/locations/${this.location.id}`,
          {
            
            location_picture: this.newLocation_picture
          },{

          
          auth: {
            username: 'reveur',
            password: 'magician'
          }
          }
      )
    },
    selectLocation(locationId) {
    this.$emit('selectLocation', locationId)
      },
    
    }
  }

</script>