<template>
<div>
  <section class="review-container">
    <h2>Reveurs Recommend</h2>
    <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
  </section>
</div>
</template>

<script>
import axios from 'axios'
import ReviewCard from '../components/ReviewCard.vue'

export default {
  name: 'ReviewPage',
  components: {ReviewCard},
  data: () => ({
    reviews: []
  }),
  mounted() {this.getReviews()},
  methods: {
    async getReviews() {
    const res= await axios.get('http://localhost:8000/reviews')
      this.reviews=res.data
      console.log(res)
    }

    }

  }
  



</script>

<style>
body {
  color:white;
}
</style>

