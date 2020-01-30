<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2><router-link to="/index">Snippets</router-link></h2>

        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 50px;
}
</style>
