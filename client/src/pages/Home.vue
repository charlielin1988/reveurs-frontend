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
  <!-- <div class="link-container">
    <div class="location-image">
      <a href ="http://localhost:8080/locations">
        <div class="link-image">
        </div>
      </a>
      <h4 class="image-header">Locations</h4>
    </div>
    <div class="exhibitions-image">
      <a href="http://localhost:8080/exhibitions">
        <div class="link-image-exhibitions">
        </div>
      </a>
      <h4>Exhibitions</h4>
    </div>
    <div class="about-image">
      <a href="http://localhost:8080/about">
        <div class="link-image-about">
        </div>
      </a>
      <h4>About</h4>
    </div>
  </div> -->
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
/* .link-image {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/26/f7/0b/26f70baef901de175d738a67f9a9ff86.png');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
  display:flex;
  align-items:center;
  margin:1em;
  justify-content:center;
  
 
}
.link-image-exhibitions {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/5c/b9/de/5cb9de24294d67578c9571e66269decd.png');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
  display:flex;
  align-items:center;
  margin:1em;
  justify-content:center;
 
}

.link-image-about {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/19/71/75/1971752382593ad5a11480f2440ba377.jpg');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
  display:flex;
  margin:1em;
  align-items:center;
  justify-content:center;
} */

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
font-size: larger;
word-spacing: 10px;
letter-spacing:10px;
color: wheat;

}
.home-page {
  height: 100vh;
  width: 100vw;
}
/* .link-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  color:white;
  gap: 1rem;
  font-family: 'Lancelot', cursive;
  width:50%;
  margin:auto
} */
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
  font-size: larger;
  font-style: italic;
  color:wheat;
}

</style>