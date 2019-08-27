<template>
  <header>
    <div class="overlay">
      <div class="container has-text-centered">
        <figure class="image">
          <img class="is-rounded" src="../assets/myAvatar.png" />
        </figure>
        <h1>
          I'm
          <span :style="{borderBottom: '3px solid #cc005f'}">Antoine Parat</span>
        </h1>
        <p>FULL STACK JAVASCRIPT DEVELOPER</p>
        <a href="#portfolio" class="button is-rounded is-medium">Hire me !</a>
      <div class="is-flex medias">
        <a>  <i class="fab fa-linkedin-in fa-3x"></i> </a>
        <a target="_blank" href="https://github.com/AntoineParat">  <i class="fab fa-github fa-3x"></i></a>
        <a target="_blank" href="mailto:paratantoine@gmail.com"> <i class="fas fa-envelope fa-3x"></i> </a>
      </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-image: url("https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
h1 {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 5em;
  font-weight: 600;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6); /* Black background with opacity */
  z-index: 2;
  height: 100vh;
  width: 100%;
  display : flex;
  align-items: center;
}
img {
  width: 128px;
  height: 128px;
  margin: auto;
}
p {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: .2rem;
  color: white;
}
.medias {
  width: 300px;
  margin: auto;
  justify-content: space-between;
  margin-top : 50px;
}
.medias a {
  color : white;
}
.medias a:hover {
  color : #cc005f;
  transition-delay: 100ms;
  transition-property: color;
}
</style>
