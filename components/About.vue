<template>
  <section>
    <h5 class="has-text-centered">ABOUT</h5>
    <div class="container">
      <div class="columns">
        <div class="column is-half justify">
          <h6>WHO AM I ?</h6>
          <br/>
          <p>I can't stand to stop learning new concepts. That's why i'm in a constant improvement.</p>
          <p>In an appropriate environment i can learn as fast as a rocket. Which makes me super productive.</p>
          <p>My current fields of interest are learning React Native and TensorFlow.</p>
          <p>I have a few different passions outside programming: spending time with friends and family, having fun with friends, druming & reading.</p>
          <br/>
          <ul class="info-list">  
            <li>
              <p>Name:</p>
              <span>Antoine Parat </span>
            </li>
            <li>
              <p>Place of birth: </p>
              <span>Limoges, France </span>
            </li>
            <li>
              <p>Date of birth: </p>
              <span>20th of November 1991</span>
            </li>
            <li>
              <p>Current location: </p>
              <span>Poitiers, France </span>
            </li>
            <li>
              <p>Email address: </p>
              <span>paratantoine@gmail.com </span>
            </li>
          </ul>
        </div>
        <div class="column is-half justify">
          <h6>MY SKILLS</h6>
          <br/>
          <p>I'm a full stack JavaScript developer using a MEVN stack <strong>(MongoDB, Express, Vue, Node) </strong>.</p>
          <p>Below you will find a list of some of my favorite JavaScript frameworks, libraries and run-time environments.</p>
          <br/>
          <div class="columns is-mobile has-text-centered">
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="JavaScript" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="HTML5" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="http://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="CSS3" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="mongoDB" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://openebs.io/assets/images/workloads/mongodb-n.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="Express" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://www.nathan-marcy.fr/pictures/express.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="Vue" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column iis-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="Node" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="Nuxt" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://nuxtjs.org/meta_640.png" />
                </figure>
              </b-tooltip>
            </div>
            <div class="column is-one-third-tablet is-half-mobile">
              <b-tooltip type="is-light" label="Socket.io" position="is-bottom">
                <figure class="image is-128x128">
                  <img src="https://www.grafikart.fr/uploads/icons/socket-io.svg" />
                </figure>
              </b-tooltip>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered bottom">
        <h6>DEVELOPMENT TOOLS:</h6>
        <br/>
        <p class="has-text-centered">Mac, VS Code, npm, Postman, Bulma, Buefy, Bootstrap, GitHub, Ngrok.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-color: #f5f5f5;
  padding-top: 1px;
  margin-top: 30px;
}
.bottom {
  padding-bottom: 80px;
}
.justify {
  text-align: justify;
}
.container {
  padding: 20px;
}
p {
  color :#4A4A4A;
  font-family: "Lato", sans-serif;
}
.info-list {
  color : #888888;
  font-family: "Lato", sans-serif;
}
li p {
  font-weight: 600
}
</style>