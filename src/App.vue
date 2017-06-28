<template>
  <div id="app">

    <nav class="nav">
      <div class="nav-left">
        <router-link to="/login" class="nav-item is-tab is-hidden-mobile">Login</router-link>
      </div><!--/.nav-left-->
      <div class="nav-right">
        <router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
        <router-link to="/users/:1" class="nav-item is-tab is-hidden-mobile">test</router-link>
      </div><!--/.nav-right-->
    </nav>

  <router-view></router-view>

</div><!--/.app-->
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
