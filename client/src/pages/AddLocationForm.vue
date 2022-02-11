<template>
<div class = 'add-location'>
  <form @submit="formSubmit" >
   <input
  type = "text"
  :value="city"
  name="city"
  @input="handleAdd"
  />
  <input
  type="date"
  :value="start_date"
  name="start_date"
  @input="handleAdd"
  />
  <input
  type="date"
  :value="end_date"
  name="end_date"
  @input="handleAdd"
  />
  <input 
  type="img_url"
  :value="location_picture"
  name="location_picture"
  @input="handleAdd"
  />
  <button type="submit">Add Location</button>
  </form>
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
      this.$router.push(`/`)
      this.$router.go()
    }
  }

}
</script>
