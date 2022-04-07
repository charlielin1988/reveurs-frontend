<template>
  <div class="exhibition-content" >
    
    
      
        <h3 class="ex-title"> {{ exhibition.title }} </h3>
        <div class="img-container">
          <img :src="exhibition.picture"  class="ex-img" />
        </div>
      
        <p class="description"> {{ exhibition.description }} </p>
      
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ExhibitionDetails',
  data: () => ({
    exhibition: {}
  }),
  mounted: async function() {
    await this.getExhibitionDetails()
  },
  methods: {
    async getExhibitionDetails() {
      const exhibitionId = parseInt(this.$route.params.exhibition_id)
      const res = await axios.get(`http://localhost:8000/exhibitions/${exhibitionId}`)
      this.exhibition = res.data
      console.log(res.data)
    },
  
  }
}

</script>
<style>


.exhibition-content {
  text-align: center;
  color: wheat;
}
.ex-title {
  font-size: 2rem;
  margin-top: 4em;
  letter-spacing: .5em;
}
.description {
  line-height: 1.75em;
  display: block;
  font-size: 2rem;
  margin-left: 2em;
  margin-right:2em;

}

.ex-img {
  max-height: 300px;
  box-shadow: 1em 1em 1em rgba(245, 222, 179, 0.371) 
}
</style>