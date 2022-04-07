<template>
  <div class="exhibitions-all">
    <h1 class="exhibitions">Exhibitions</h1>
    <section class="exhibitions-info">
      <div class="exhibitions-container" v-for="exhibition in exhibitions" :key="exhibition.id" >
      <ExhibitionCard :exhibition="exhibition" @click.native="selectExhibition(exhibition.id)" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import ExhibitionCard from '../components/ExhibitionCard.vue'

export default {
  name: 'AllExhibitions',
  components: {
    ExhibitionCard
  },
  data: () => ({
    exhibitions: [],
    location: ''
  }),
  mounted () {
    this.getExhibitions()
  },
  methods: {
    async getExhibitions() {
      const res = await axios.get(`http://localhost:8000/exhibitions`)
      this.exhibitions = res.data
      // console.log(res.data)
    },
    
    selectExhibition(exhibitionId) {
      this.$router.push(`/details/${exhibitionId}`)
    }
  }
}
</script>

<style>
.exhibitions-all {
  color: wheat;
  
  }
  .exhibitions {
    margin-top: 2.25em;
    font-size: 3rem;
    letter-spacing: .25em;
  }
  .exhibitions-info {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-evenly;
    align-items: baseline;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: .15em;
    gap: 2em 1em;
    margin-left: 20em;
    margin-right: 20em;
    
    
    
    
  

    
    
    
  }

</style>

