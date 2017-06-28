<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li>
            <a href="#">
              <router-link to="/" class="nav-item">Home</router-link>
            </a>
          </li>
          <li>
            <a href="#">
              <router-link to="/login" class="nav-item">Login</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>

  <router-view></router-view>

</div><!--/#app-->
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
