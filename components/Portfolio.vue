 <template>
  <section id="portfolio" class="container">
    <div class="has-text-centered">
      <h5>PORTFOLIO</h5>
      <button class="button" v-on:click="origine('Origine')">All</button>
      <button class="button" v-on:click="selector('Full Stack')">Full Stack</button>
      <button class="button" v-on:click="selector('Front End')">Front End</button>
      <button class="button" v-on:click="selector('Games')">JS games</button>
      <button class="button" v-on:click="selector('Html')">HTML CSS</button>
      <button class="button" v-on:click="selector('Testing')">Testing</button>
    </div>
    <transition-group name="list-complete" tag="ul" class="columns">
      <li v-for="(item) in items" v-bind:key="item.name" class="column is-5 list-complete-item">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src=" 'img/' + item.picture" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{item.name}}</p>
                <p
                  class="subtitle"
                  :style="{color : '#cc005f', fontWeight : 'bold', fontSize : '1em' }"
                >{{item.tech}}</p>
              </div>
            </div>

            <div class="content">
              <span v-html="item.description"></span>
              <br/>
              <br/>
              <time>le {{item.date}}</time>
            </div>
          </div>
          <footer class="card-footer">
            <a target="_blank" :href="item.site" class="card-footer-item" v-if="item.site">View demo</a>
            <a target="_blank" :href="item.git" class="card-footer-item">View GitHub</a>
          </footer>
        </div>
      </li>
    </transition-group>
  </section>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Stopover-chat",
          type: ["Full Stack"],
          picture: "stopover.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js, Socket.io",
          site: "https://stopover-chat.herokuapp.com",
          git: "https://github.com/AntoineParat/stopover-chat",
          description: "Real-time chat app with special authorizations, premium subscription and other features.",
          date: "14/08/2019"
        },
        {
          name: "Foodelicious",
          type: ["Full Stack"],
          picture: "foodelicious.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js",
          site: "https://foodelicious.herokuapp.com",
          git: "https://github.com/AntoineParat/delicious",
          description: "A fully featured restaurant review site, with customizable user accounts, authentication, ratings, map location, tags filter and so more.",
          date: "26/07/2019"
        },
        {
          name: "GitHub-timeline",
          type: ["Front End"],
          picture: "timeline.png",
          tech: "Vue.js",
          site: "https://antoineparat.github.io/GitHub-timeline/",
          git: "https://github.com/AntoineParat/GitHub-timeline",
          description : "Enter an username and view his GitHub's repositories as a timeline.",
          date: "06/07/2019"
        },
        {
          name: "My-personnal-list",
          type: ["Full Stack"],
          picture: "list.png",
          tech: "MongoDB, Express.js, Node.js",
          site: "https://my-personal-list.herokuapp.com",
          git: "https://github.com/AntoineParat/my-personal-list",
          description: "A complete task manager with REST API, user accounts, authentication and more.",
          date: "18/06/2019"
        },
        {
          name: "Parking-Poitiers",
          type: ["Front End"],
          picture: "parking.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Parking-Poitiers",
          git: "https://github.com/AntoineParat/parking-poitiers",
          description : "Real time available parking spaces in Poitiers, geolocation and routing.",
          date:"17/05/2019"
        },
        {
          name: "Memory-game",
          type: ["Games"],
          picture: "memory.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Memory-game",
          git: "https://github.com/AntoineParat/memory-game",
          description:
            "An interactive browser-based card matching game in HTML, CSS, and JavaScript.",
          date: "12/04/2019"
        },
        {
          name: "Arcade-game",
          type: ["Games"],
          picture: "arcade.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Arcade-game",
          git: "https://github.com/AntoineParat/arcade-game",
          description:
            "Object-oriented JavaScript to build a classic arcade game.",
          date:"21/04/2019"
        },
        {
          name: "Jasmine-testing",
          type: ["Testing"],
          picture: "jasmine.png",
          tech: "Jasmine",
          git: "https://github.com/AntoineParat/jasmine-test",
          description:
            "Using Jasmine to develop tests against a pre-existing web application.",
          date:"21/04/2019"
        },
        {
          name: "Template-integration",
          type: ["Html"],
          picture: "integration.png",
          tech: "HTML, CSS",
          site: "https://antoineparat.github.io/Template-integration/",
          git: "https://github.com/AntoineParat/integration-maquette",
          description : "Building a responsive site starting from a PSD template.",
          date:"22/02/2019"
        },
        {
          name: "Restaurant-reviews",
          type: ["Front End"],
          picture: "reviews.png",
          tech: "Vanilla Js",
          git: "https://github.com/AntoineParat/restaurant-review",
          description:
            "Converting a static webpage to be responsive and accessible for screen reader use.  </br>  Implementing a Service Worker to provide offline experiences.",
          date: "03/05/2019"
        },
        {
          name: "antoineparat.io",
          type: ["Front End"],
          picture: "antoine.png",
          tech: "Vue.js, Nuxt.js",
          site: "https://antoineparat.io",
          git: "https://github.com/AntoineParat/antoineparat.io",
          description: "A fully functional portfolio site using Nuxt.js.",
          date: "27/08/2019"
        },
        {
          name: "Feed-reader",
          type: ["Front End"],
          picture: "feed.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Feed-reader/",
          git: "https://github.com/AntoineParat/feed-reader",
          description: "A tiny app to fetch and create public posts.",
          date: "18/05/2019"
        }
      ],
      origin: [
        {
          name: "Stopover-chat",
          type: ["Full Stack"],
          picture: "stopover.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js, Socket.io",
          site: "https://stopover-chat.herokuapp.com",
          git: "https://github.com/AntoineParat/stopover-chat",
          description: "Real-time chat app with special authorizations, premium subscription and other features.",
          date: "14/08/2019"
        },
        {
          name: "Foodelicious",
          type: ["Full Stack"],
          picture: "foodelicious.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js",
          site: "https://foodelicious.herokuapp.com",
          git: "https://github.com/AntoineParat/delicious",
          description: "A fully featured restaurant review site, with customizable user accounts, authentication, ratings, map location, tags filter and so more.",
          date: "26/07/2019"
        },
        {
          name: "GitHub-timeline",
          type: ["Front End"],
          picture: "timeline.png",
          tech: "Vue.js",
          site: "https://antoineparat.github.io/GitHub-timeline/",
          git: "https://github.com/AntoineParat/GitHub-timeline",
          description : "Enter an username and view his GitHub's repositories as a timeline.",
          date: "06/07/2019"
        },
        {
          name: "My-personnal-list",
          type: ["Full Stack"],
          picture: "list.png",
          tech: "MongoDB, Express.js, Node.js",
          site: "https://my-personal-list.herokuapp.com",
          git: "https://github.com/AntoineParat/my-personal-list",
          description: "A complete task manager with REST API, user accounts, authentication and more.",
          date: "18/06/2019"
        },
        {
          name: "Parking-Poitiers",
          type: ["Front End"],
          picture: "parking.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Parking-Poitiers",
          git: "https://github.com/AntoineParat/parking-poitiers",
          description : "Real time available parking spaces in Poitiers, geolocation and routing.",
          date:"17/05/2019"
        },
        {
          name: "Memory-game",
          type: ["Games"],
          picture: "memory.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Memory-game",
          git: "https://github.com/AntoineParat/memory-game",
          description:
            "An interactive browser-based card matching game in HTML, CSS, and JavaScript.",
          date: "12/04/2019"
        },
        {
          name: "Arcade-game",
          type: ["Games"],
          picture: "arcade.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Arcade-game",
          git: "https://github.com/AntoineParat/arcade-game",
          description:
            "Object-oriented JavaScript to build a classic arcade game.",
          date:"21/04/2019"
        },
        {
          name: "Jasmine-testing",
          type: ["Testing"],
          picture: "jasmine.png",
          tech: "Jasmine",
          git: "https://github.com/AntoineParat/jasmine-test",
          description:
            "Using Jasmine to develop tests against a pre-existing web application.",
          date:"21/04/2019"
        },
        {
          name: "Template-integration",
          type: ["Html"],
          picture: "integration.png",
          tech: "HTML, CSS",
          site: "https://antoineparat.github.io/Template-integration/",
          git: "https://github.com/AntoineParat/integration-maquette",
          description : "Building a responsive site starting from a PSD template.",
          date:"22/02/2019"
        },
        {
          name: "Restaurant-reviews",
          type: ["Front End"],
          picture: "reviews.png",
          tech: "Vanilla Js",
          git: "https://github.com/AntoineParat/restaurant-review",
          description:
            "Converting a static webpage to be responsive and accessible for screen reader use.  </br>  Implementing a Service Worker to provide offline experiences.",
          date: "03/05/2019"
        },
        {
          name: "antoineparat.io",
          type: ["Front End"],
          picture: "antoine.png",
          tech: "Vue.js, Nuxt.js",
          site: "https://antoineparat.io",
          git: "https://github.com/AntoineParat/antoineparat.io",
          description: "A fully functional portfolio site using Nuxt.js.",
          date: "27/08/2019"
        },
        {
          name: "Feed-reader",
          type: ["Front End"],
          picture: "feed.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Feed-reader/",
          git: "https://github.com/AntoineParat/feed-reader",
          description: "A tiny app to fetch and create public posts.",
          date: "18/05/2019"
        }
      ],
      isActive: null
    };
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    origine(choice) {
      if (this.isActive == choice) {
        return;
      }
      this.items = [];
      for (let item of this.origin) {
        this.items.push(item);
      }
      this.isActive = choice;
    },
    selector(choice) {
      if (this.isActive == choice) {
        return;
      }
      let array = [
       {
          name: "Stopover-chat",
          type: ["Full Stack"],
          picture: "stopover.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js, Socket.io",
          site: "https://stopover-chat.herokuapp.com",
          git: "https://github.com/AntoineParat/stopover-chat",
          description: "Real-time chat app with special authorizations, premium subscription and other features.",
          date: "14/08/2019"
        },
        {
          name: "Foodelicious",
          type: ["Full Stack"],
          picture: "foodelicious.png",
          tech: "MongoDB, Express.js, Vue.js, Node.js",
          site: "https://foodelicious.herokuapp.com",
          git: "https://github.com/AntoineParat/delicious",
          description: "A fully featured restaurant review site, with customizable user accounts, authentication, ratings, map location, tags filter and so more.",
          date: "26/07/2019"
        },
        {
          name: "GitHub-timeline",
          type: ["Front End"],
          picture: "timeline.png",
          tech: "Vue.js",
          site: "https://antoineparat.github.io/GitHub-timeline/",
          git: "https://github.com/AntoineParat/GitHub-timeline",
          description : "Enter an username and view his GitHub's repositories as a timeline.",
          date: "06/07/2019"
        },
        {
          name: "My-personnal-list",
          type: ["Full Stack"],
          picture: "list.png",
          tech: "MongoDB, Express.js, Node.js",
          site: "https://my-personal-list.herokuapp.com",
          git: "https://github.com/AntoineParat/my-personal-list",
          description: "A complete task manager with REST API, user accounts, authentication and more.",
          date: "18/06/2019"
        },
        {
          name: "Parking-Poitiers",
          type: ["Front End"],
          picture: "parking.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Parking-Poitiers",
          git: "https://github.com/AntoineParat/parking-poitiers",
          description : "Real time available parking spaces in Poitiers, geolocation and routing.",
          date:"17/05/2019"
        },
        {
          name: "Memory-game",
          type: ["Games"],
          picture: "memory.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Memory-game",
          git: "https://github.com/AntoineParat/memory-game",
          description:
            "An interactive browser-based card matching game in HTML, CSS, and JavaScript.",
          date: "12/04/2019"
        },
        {
          name: "Arcade-game",
          type: ["Games"],
          picture: "arcade.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Arcade-game",
          git: "https://github.com/AntoineParat/arcade-game",
          description:
            "Object-oriented JavaScript to build a classic arcade game.",
          date:"21/04/2019"
        },
        {
          name: "Jasmine-testing",
          type: ["Testing"],
          picture: "jasmine.png",
          tech: "Jasmine",
          git: "https://github.com/AntoineParat/jasmine-test",
          description:
            "Using Jasmine to develop tests against a pre-existing web application.",
          date:"21/04/2019"
        },
        {
          name: "Template-integration",
          type: ["Html"],
          picture: "integration.png",
          tech: "HTML, CSS",
          site: "https://antoineparat.github.io/Template-integration/",
          git: "https://github.com/AntoineParat/integration-maquette",
          description : "Building a responsive site starting from a PSD template.",
          date:"22/02/2019"
        },
        {
          name: "Restaurant-reviews",
          type: ["Front End"],
          picture: "reviews.png",
          tech: "Vanilla Js",
          git: "https://github.com/AntoineParat/restaurant-review",
          description:
            "Converting a static webpage to be responsive and accessible for screen reader use.  </br>  Implementing a Service Worker to provide offline experiences.",
          date: "03/05/2019"
        },
        {
          name: "antoineparat.io",
          type: ["Front End"],
          picture: "antoine.png",
          tech: "Vue.js, Nuxt.js",
          site: "https://antoineparat.io",
          git: "https://github.com/AntoineParat/antoineparat.io",
          description: "A fully functional portfolio site using Nuxt.js.",
          date: "27/08/2019"
        },
        {
          name: "Feed-reader",
          type: ["Front End"],
          picture: "feed.png",
          tech: "Vanilla JS",
          site: "https://antoineparat.github.io/Feed-reader/",
          git: "https://github.com/AntoineParat/feed-reader",
          description: "A tiny app to fetch and create public posts.",
          date: "18/05/2019"
        }
      ];
      let arrayFilter = array.filter(element => element.type.includes(choice));
      arrayFilter = this.shuffle(arrayFilter);
      this.items = arrayFilter;
      this.isActive = choice;
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.push(this.randomIndex());
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
};
</script>

<style scoped>
.list-complete-item {
  transition: all 0.5s;
  display: inline-block;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
}
.card-footer {
  margin-top: auto;
}
ul {
  margin-top: 30px;
}
li {
  margin-right: auto;
  margin-left: auto;
}
</style>