<template>
  <div class="row">
    <div class="col-sm-7 nopadd-rth">
      <div class="contact-from-wrap">
        <div class="sec-heading">
          <h2 class="sec-title">Get In Touch</h2>
          <p class="alert alert-success" v-if="status">
            Thanks, we will contact you shortly
          </p>
        </div>
        <form class="contact-form clearfix" @submit.prevent="submit">
          <div class="form-group">
            <label class="info-title" for="exampleInputName">Your Name</label>
            <input
              required
              type="text"
              class="form-control"
              id="exampleInputName"
              v-model="form.name"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label class="info-title" for="exampleInputEmail1"
              >Email Address</label
            >
            <input
              required
              type="email"
              class="form-control"
              v-model="form.email"
              id="exampleInputEmail1"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <label class="info-title" for="exampleInputTitle">Subject</label>
            <input
              required
              type="text"
              v-model="form.subject"
              class="form-control"
              id="exampleInputTitle"
              placeholder="Subject"
            />
          </div>
          <div class="form-group">
            <label class="info-title" for="exampleInputComments"
              >Your Comments</label
            >
            <textarea
              placeholder="Comments"
              class="form-control txtarea"
              id="exampleInputComments"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-filled btn-round">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
    <div class="col-sm-5 addrssect">
      <div class="contact-info-wrap">
        <address>
          <i class="fa fa-envelope"></i>
          <span>Email Address</span>
          <a>info@ddmemes.com</a>
        </address>
        <address>
          <a
            href="https://www.facebook.com/evilgt"
            style="text-decoration: none"
            target="_blank"
          >
            <i class="fa-brands fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
        </address>
        <!-- <address>
          <i class="fa fa-map-marker"></i>
          <span>Address</span>
          22/704 Princes Highway,<br />
          Kogarah, NSW 2217
        </address> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://ddmemes.com/contactus',
        },
      ],
      title: 'Contact Us',
    }
  },
  data() {
    return {
      status: false,
      form: {},
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post('/contactus', this.form)
        this.form = {}
        this.status = true
      } catch (e) {}
    },
  },
}
</script>
