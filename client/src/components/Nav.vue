<template>
<header>
  <nav>
    <router-link to='/' name='Home'>Home</router-link>
    <router-link to='/about' name='About'>About</router-link>
    <router-link to='/addlocationform' name='AddLocationForm'>Add A Location</router-link>
    <router-link to='/exhibitions'>Exhibitions</router-link>
  </nav>
</header>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style scoped></style>