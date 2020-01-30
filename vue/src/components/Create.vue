<template>
  <div class="pt-5">
    <form @submit.prevent="create" method="post">
      <div class="form-group">
        <label for="title">Title</label>
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
        <label for="language">Language</label>
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
          <option value="Python">Python</option>
          <option value="Javascript">Javascript</option>
          <option value="PHP">PHP</option>
        </select>
        <div class="invalid-feedback">
          Please provide a valid language.
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
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
        <label for="code">Code</label>
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
      <div class="form-group">
        <label for="active">Active</label>
        <select
          name="active"
          class="form-control"
          v-validate="'required'"
          id="active"
          v-model="snippet.active"
          :class="{ 'is-invalid': errors.has('snippet.active') && submitted }"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div class="invalid-feedback">
          Please provide a valid active status.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      snippet: {
        title: "",
        description: "",
        language: "",
        code: "",
        active: ""
      },
      submitted: false
    };
  },
  methods: {
    create: function() {
      this.$validator.validate().then(result => {
        this.submitted = true;
        if (!result) {
          return;
        }
        axios
          .post("http://127.0.0.1:8000/api/snippets/", this.snippet)
          .then(response => {
            console.log(response);
            this.$router.push("/");
          });
      });
    }
  }
};
</script>
