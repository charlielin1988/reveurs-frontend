<template>
  <div class="view-locations">
    <div v-for="exhibition in exhibitions" :key="exhibition.id"  >
      <ExhibitionCard :exhibition="exhibition" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ExhibitionCard from '../components/ExhibitionCard.vue'

export default {
  name: 'ViewExhibitions',
  components: {
    ExhibitionCard
  },
  props: {},
  data: () => ({
    exhibitions: [],
  }),
  mounted() {this.getExhibitionsByLocation()},
  methods: {
  async getExhibitionsByLocation() {
      const locationId = this.$route.params.location_id
      const res = await axios.get(`http://localhost:8000/exhibitions/${locationId}`)
      this.exhibitions = res.data
    },
    
    
    
  }
}
</script>