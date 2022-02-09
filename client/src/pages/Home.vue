<template>
<div>Home</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {},
  data: () => ({
    locations: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted:async function(){
    await this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await axios.get(`http://localhost:8000/locations`)
      this.locations = res
      console.log(res)
    }
  }
  }
</script>
