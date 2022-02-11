<template>
<div class = 'add-location'>
  <div class='location-prediction-form'>
  <h4> Have An Inkling Where The Cirque Des Reves Will Be Appearing Next? Add Your Prediction Here:</h4>
  <form @submit="formSubmit" >
    The Cirque Des Reves Will Appear Next In:
   <input
  type = "text"
  :value="city"
  name="city"
  placeholder="city prediction"
  @input="handleAdd"
  />
  On The Night Of:
  <input
  type="date"
  :value="start_date"
  name="start_date"
  @input="handleAdd"
  />
  Until:
  <input
  type="date"
  :value="end_date"
  name="end_date"
  @input="handleAdd"
  />
  In This Spot:
  <input 
  type="img_url"
  :value="location_picture"
  name="location_picture"
  placeholder="image of location"
  @input="handleAdd"
  />
  <button type="submit">Add Prediction</button>
  </form>
  </div>
  <div class='location-prediction-form'>
    <br/>
  <h4> Wish To Tell Us Of Your Cirque Sighting?</h4>
  <form @submit="formSubmit" >
    I Saw The Cirque Des Reves In:
   <input
  type = "text"
  :value="city"
  name="city"
  placeholder="city"
  @input="handleAdd"
  />
  On The Night Of:
  <input
  type="date"
  :value="start_date"
  name="start_date"
  @input="handleAdd"
  />
  In This Spot:
  <input 
  type="img_url"
  :value="location_picture"
  name="location_picture"
  placeholder="image of location"
  @input="handleAdd"
  />
  It Left On:
  <input
  type="date"
  :value="end_date"
  name="end_date"
  @input="handleAdd"
  />
  
  <button type="submit">Add Sighting</button>
  </form>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'AddLocationForm',
  data: () => ({
    city: '',
    start_date: '',
    end_date: '',
    location_picture: ''
  }),
  methods: {
    handleAdd(e) {
      this[e.target.name] = e.target.value
    },
    formSubmit(e) {
      e.preventDefault();
      const newLocation = {
        "city": this.city,
        "start_date": this.start_date,
        "end_date": this.end_date,
        "location_picture": this.location_picture
      };
      console.log(newLocation);
      axios.post(`http://localhost:8000/locations/`, newLocation, {
        auth: {
          username: 'reveur',
          password: 'magician'
        }
      })
      this.$router.push(`/locations`)
      this.$router.go()
    }
  }

}
</script>
