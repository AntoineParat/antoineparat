<template>
  <section>
    <h5 class="has-text-centered">CONTACT</h5>
    <div class="container">
      <form @submit.prevent="post">
        <div class="columns center">
          <div class="field column is-3">
            <label class="label padding">Name</label>
            <div class="control padding">
              <input
                v-model="user"
                class="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div class="field column is-3">
            <label class="label padding">Email</label>
            <div class="control padding">
              <input
                v-model="email"
                class="input"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
        </div>

        <div class="colums">
          <div class="field column is-6 auto">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-model="message"
                class="textarea"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div class="control">
              <button type="submit" class="button is-rounded is-medium">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <div class="is-flex medias">
        <a>
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a target="_blank" href="https://github.com/AntoineParat">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a target="_blank" href="mailto:paratantoine@gmail.com">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </div>
      <p id="copyrigth" class="has-text-centered">© Antoine Parat 2019</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      email: null,
      message: null
    };
  },
  methods: {
    post() {
      // this.$axios
      //   .post("https://api.emailjs.com/api/v1.0/email/send", {
      //     service_id: "sendgrid",
      //     template_id: "template_rHAz7gyN",
      //     user_id: process.env.EMAIL_JS,
      //     template_params: {
      //       user: this.user,
      //       email: this.email,
      //       message: this.message
      //     }
      //   })
      this.$axios
        .post('/api/mail', {
          user: this.user,
          email: this.email,
          message: this.message
        })
        .then(resp => {
          this.user = this.email = this.message = null;
          if (!resp.data.error) {
            this.success(resp.data.success);
          } else {
            this.error(resp.data.error);
          }
        })
        .catch(error => {
          this.user = this.email = this.message = null;
          this.error("An error occured, please try again later");
        });
    },
    success(message) {
      this.$buefy.toast.open({
        duration: 5000,
        message,
        position: "is-bottom",
        type: "is-success"
      });
    },
    error(message) {
      this.$buefy.toast.open({
        duration: 5000,
        message,
        position: "is-bottom",
        type: "is-danger"
      });
    },
  }
};
</script>

<style scoped>
section {
  background-color: #363636;
  height: 800px;
}
h5 {
  padding-top: 50px;
}
.label {
  color: white;
}
.center {
  justify-content: center;
}
.auto {
  margin: auto;
}
.padding {
  padding-right: 0.625em;
  padding-left: 0.625em;
}
textarea {
  height: 170px;
}
form {
  margin-top: 70px;
}
.medias {
  width: 200px;
  margin: auto;
  justify-content: space-between;
  margin-top: 50px;
}
.medias a {
  color: white;
}
.medias a:hover {
  color: #cc005f;
  transition-delay: 100ms;
  transition-property: color;
}
#copyrigth {
  color: white;
  margin-top: 40px;
}
</style>