<template>
  <form
    id="contact-form"
    name="contact-form"
    @submit.prevent="submit"
    method="POST"
  >
    <h4 v-if="status">Thanks, we will contact you shortly</h4>
    <div class="row">
      <!--Grid column-->
      <div class="col-md-6">
        <div class="md-form mb-0">
          <input
            required
            type="text"
            id="name"
            v-model="form.name"
            name="name"
            class="form-control"
          />
          <label for="name" class="">Your name</label>
        </div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-6">
        <div class="md-form mb-0">
          <input
            required
            type="email"
            id="email"
            v-model="form.email"
            name="email"
            class="form-control"
          />
          <label for="email" class="">Your email</label>
        </div>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->

    <!--Grid row-->
    <div class="row">
      <div class="col-md-12">
        <div class="md-form mb-0">
          <input
            required
            type="text"
            id="subject"
            v-model="form.subject"
            name="subject"
            class="form-control"
          />
          <label for="subject" class="">Subject</label>
        </div>
      </div>
    </div>
    <!--Grid row-->

    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-md-12">
        <div class="md-form">
          <textarea
            type="text"
            id="message"
            v-model="form.message"
            name="message"
            rows="2"
            class="form-control md-textarea"
          ></textarea>
          <label for="message">Your message</label>
        </div>
      </div>
    </div>
    <div class="text-center text-md-left">
      <button class="btn btn-primary">Send</button>
    </div>
  </form>
</template>

<script>
export default {
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
        this.status = true
      } catch (e) {}
    },
  },
}
</script>