<template>
  <div class="pt-5">
    <form @submit.prevent="update" method="post">
      <div class="form-group">
        <label for="name">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="snippet.title"
          v-validate="'required'"
          name="title"
          :class="{ 'is-invalid': errors.has('snippet.title') && submitted }"
        />
        <div class="invalid-feedback">
          Please provide a valid title.
        </div>
      </div>
      <div class="form-group">
        <label for="currency">Language</label>
        <select
          name="language"
          class="form-control"
          v-validate="'required'"
          id="language"
          v-model="snippet.language"
          :class="{ 'is-invalid': errors.has('snippet.language') && submitted }"
        >
          <option value="C">C</option>
          <option value="C++">C++</option>
        </select>
        <div class="invalid-feedback">
          Please provide a valid language.
        </div>
      </div>
      <div class="form-group">
        <label for="name">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="snippet.description"
          v-validate="'required'"
          name="description"
          :class="{
            'is-invalid': errors.has('snippet.description') && submitted
          }"
        />
        <div class="invalid-feedback">
          Please provide a valid description.
        </div>
      </div>
      <div class="form-group">
        <label for="name">Code</label>
        <textarea
          class="form-control"
          id="code"
          v-model="snippet.code"
          v-validate="'required'"
          name="code"
          :class="{ 'is-invalid': errors.has('snippet.code') && submitted }"
        >
        </textarea>
        <div class="invalid-feedback">
          Please provide a valid code.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn btn-danger" v-on:click="deleteSnippet(snippet)">
        Delete
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      subscription: {
        name: "",
        currency: "",
        amount: "",
        description: ""
      },
      snippet: {
        title: "",
        description: "",
        language: "",
        code: ""
      },
      submitted: false
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/snippets/" + this.$route.params.id)
      .then(response => {
        this.snippet = response.data;
      });
  },
  methods: {
    update: function(e) {
      this.$validator.validate().then(result => {
        this.submitted = true;
        if (!result) {
          return;
        }
        axios
          .put(
            `http://127.0.0.1:8000/api/snippets/${this.snippet.id}/`,
            this.snippet
          )
          .then(response => {
            this.$router.push("/");
          });
      });
    },
    deleteSnippet: function(snippet) {
      if (confirm("Delete " + snippet.title)) {
        axios
          .delete(`http://127.0.0.1:8000/api/snippets/${snippet.id}`)
          .then(response => {
            this.$router.push("/");
          });
      }
    }
  }
};
</script>

<style>
button {
  margin: 5px;
}
</style>
