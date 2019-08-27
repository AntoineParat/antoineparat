<template>
  <div>
    <Header />
    <Portfolio />
    <About />
    <Timeline />
    <Contact />
    <button @click="topFunction" id="myBtn" title="Go to top"><i class="fas fa-chevron-up"></i></button>
  </div>
</template>


<script>
import Header from "~/components/Header";
import Portfolio from "~/components/Portfolio";
import About from "~/components/About";
import Timeline from "~/components/Timeline";
import Contact from "~/components/Contact";
export default {
  name: "HomePage",

  components: {
    Header,
    Portfolio,
    About,
    Timeline,
    Contact
  },
  data() {
    return {
      scrollToTop: null,
    }
  },
  mounted() {
    window.onscroll = function() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    };
  },
  methods : {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color:#cc005f;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #C95C8D;
}
</style>