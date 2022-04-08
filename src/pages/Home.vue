<template>
<div class="home-page">
  <div class="homepage-header">
    <h2>Reveurs Collective</h2>
  </div>
  <div class="video-container">
  <video class="video" width="auto" height="300" poster="../assets/logo.png" controls>
   <source  src = "../assets/thenightcircus.mp4"
  type="video/mp4">
  </video>

  </div>
  
  <p class="tagline"> Magic.  Mystery.  Rivalry.  Love.  Welcome To The Cirque Des Rêves.  What will you discover here?</p>
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lancelot&display=swap');
body {
  background-image: url('~@/assets/background.jpeg');
  background-size:cover;
  background-position:center;
  height:100vh;
  width:100vw;
  
}


a {
  text-decoration: none;
  color:wheat;
}

.homepage-header {
text-align:center;
font-family: 'Lancelot', cursive;
color: white;
margin-top: 10%;
margin-bottom: 5%;
font-size: 3rem;
word-spacing: 10px;
letter-spacing:10px;
color: wheat;

}
.home-page {
  height: 100vh;
  width: 100vw;
}

.video-container{
opacity: .5;
width:50%;
margin:auto;

}
.tagline {
  text-align: center;
  margin-top: 5%;
  word-spacing: 10px;
  font-family: 'Lancelot', cursive;
  font-size: 2rem;
  font-style: italic;
  color:wheat;
}

</style>