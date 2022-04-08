<template>
  <div class = "location-container">
    
    <div class="location-card" @click="selectLocation(location.id, location.city)">
      <div class="info-wrapper">
        <h3 class="city-name">{{ location.city }}</h3>
        <h4 class="date">{{ location.start_date |formatDate }} - {{ location.end_date |formatDate }} </h4>
      </div >
      <div class="image-wrapper">
        <img class="card-image" :src="location.location_picture" :alt="location.city" />
      </div>
      <div class="button-container">
        <button @click="deleteLocation" class="delete-button">Delete Location</button>
        <div class ="showUpdate">
        <button @click="showUpdate = !showUpdate" class="show">Update Location</button>
      </div>
        <div v-if="showUpdate" class= "updateForm">
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
              <button type="submit" >Submit Changes</button>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'LocationCard',
  props:{ location: {}},
  data: ()=> ( {
    city: '',
    start_date: '',
    end_date: '',
    location_picture: '',
    showUpdate: false
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

    async submitForm (e) {
      e.preventDefault()
      const updatedLocation =
      {
        showUpdate:true,
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
  
  }

</script>
<style>

.card-image{
  height:15vh;
  width: 15vw;
  border-radius: 50%;
  margin-bottom:2%;
}
.show{
  background-color:rgba(0, 0, 0, 0.557);
  color:wheat;
  border-radius:50%;
  height: 5vh;
  width:5vw;
}
.delete-button{
  background-color:rgba(53, 3, 3, 0.612);
  color:wheat;
  border-radius:50%;
  height: 5vh;
  width:5vw;
}
.button-container{
  display:flex;
  justify-content:center;
  column-gap:10px;
  
}
.city-name {
  font-size:1.5em;
  letter-spacing: .15em;
  margin-bottom: 0%;
  
  
}
.date {
  font-size:1.3em;
  margin-top: 0%;
}

</style>