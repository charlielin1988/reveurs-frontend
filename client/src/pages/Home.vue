<template>
<div class="home-page">
  <div class="homepage-header">
    <h2>Reveurs Collective</h2>
  </div>
  <div class="link-container">
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
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lancelot&display=swap');
body {
  background-image:url('https://ksr-ugc.imgix.net/assets/026/444/426/68bac08f7d360a22e79661a3bd756623_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1568247548&auto=format&frame=1&q=92&s=eca8dddadd925734d85f1617c6249502');
  background-size:cover;
}
.link-image {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/26/f7/0b/26f70baef901de175d738a67f9a9ff86.png');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
 
}
.link-image-exhibitions {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/5c/b9/de/5cb9de24294d67578c9571e66269decd.png');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
 
}

.link-image-about {
  height:20vh;
  width:20vh;
  background-image: url('https://i.pinimg.com/originals/19/71/75/1971752382593ad5a11480f2440ba377.jpg');
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px gray inset;
 
}

a {
  text-decoration: none
}
.homepage-header {
text-align:center;
font-family: 'Lancelot', cursive;
}

</style>