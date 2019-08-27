<template>
  <section class="container">
    <h5 class="has-text-centered">RESUME</h5>
    <div class="timeline-container">
      <div
        v-for="(project, index) in timeline"
        :key="index"
        :class="['timeline-block', {'timeline-block-right' : index % 2 === 0}, {'timeline-block-left' : index % 2 != 0} ]"
      >
        <div class="marker"></div>
        <div class="timeline-content">
          <p style="fontSize : 1.1rem">{{project.date}}</p>
          <h3> <a target="_blank" :href="project.website" v-html="project.name"> </a></h3>
          <p style="direction : ltr;">{{project.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          sortByDate: new Date("2015Z"),
          date: "2015",
          name: "CAPES Sciences Ecocomiques et Sociales",
          content: "Economics' teacher certification",
        },
         {
          sortByDate: new Date("2016Z"),
          date: "2016",
          name: "Master’s degree",
          content: "Education, Teaching and Training. University of Poitiers.",
        },
        {
          sortByDate: new Date("2017Z"),
          date: "2016-2018",
          name: "Economics teacher",
          content: "High School teacher at Education Nationale",
        },
        {
          sortByDate: new Date("2019Z"),
          date: "2019",
          name: "Full stack JavaScript developer <i class='em em-rocket'></i> ",
          content: "A world of new exciting things!",
        },
      ]
    };
  },
  mounted() {
    this.$axios
      .get("https://api.github.com/users/antoineparat/repos")
      .then(response => {
        response.data.forEach(element => {
          if (element.created_at === "2019-07-27T17:30:08Z") {
            element.created_at = "2019-02-22T17:10:36Z";
            element.sortByDate = "2019-02-22T17:10:36Z";
          }
          const date = moment(element.created_at).format("L");
          this.timeline.push({
            sortByDate: new Date(element.created_at),
            date: date,
            name: element.name,
            content: element.description,
            link: element.html_url,
            website: element.homepage
          });
        });
      })
      .then(() => {
        this.timeline.sort(function(a, b) {
          return b.sortByDate - a.sortByDate;
        });
      });
  }
};
</script>

<style scoped>
section {
  padding-top: 1px;
}
a{
  color: #CD405F;
}
.timeline-container {
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
}
.timeline-container:before {
  /*This is the line down the middle*/
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  background: #ccd1d9;
  z-index: 1;
}
.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}
.timeline-block-right {
  float: right;
}
.timeline-block-left {
  float: left;
  direction: rtl;
  text-align: right;
}
.marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #f5f7fa;
  background: #4dd0e1;
  margin-top: 10px;
  z-index: 9999;
}
.timeline-content {
  width: 95%;
  padding: 0 15px;
  color: #666;
  margin-top: 5px;
}
.timeline-content h3 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 500;
}
.timeline-content span {
  font-size: 15px;
  color: #a4a4a4;
}
.timeline-content p {
  font-size: 14px;
  line-height: 1.5em;
  color: #888;
}
@media screen and (max-width: 768px) {
  .timeline-container:before {
    left: 8px;
    width: 2px;
  }
  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-block-right {
    float: none;
  }
  .timeline-block-left {
    float: none;
    direction: ltr;
    text-align: left;
  }
}
</style>