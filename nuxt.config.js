export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: "Antoine Parat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Antoine Parat",
        content: "I'm Antoine Parat, a full stack JavaScript web developer in Poitiers, France."
      },

      // Twitter Card data
      {name: "twitter:title", content: "Antoine Parat" },
      {name:"twitter:description", content: "Full stack Javascript developer. Poitier."},
      {name: "twitter:image", content: "https://antoineparat.io/img/myAvatar.png" },
      { name: "twitter:card", content: "https://antoineparat.io/img/myAvatar.png"},

      // Open Graph data
      { property: "og:title", content: "Antoine Parat" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://antoineparat.io" },
      { property: "og:image", content: "https://antoineparat.io/img/myAvatar.png" },
      {
        property: "og:description",
        content: "Full stack Javascript developer. Poitier."
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/fr.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Lato&display=swap",
        rel: "stylesheet"
      },
      {
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        rel: "stylesheet"
      },
      { href: "https://afeld.github.io/emoji-css/emoji.css", rel: "stylesheet" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv"
  ],

  serverMiddleware: ["~/api/index.js"],

  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
