<template>
  <div id="app" class="container">

    <div class="page-header">
      <h1>Login</h1>
    </div><!--/.page-header-->
    <div class="panel panel-default">
      <div class="panel-body">
        <form id="form" class="form-block">
          <div class="form-group">
            <label for="userName">Username:</label>
            <input type="text" id="userName" class="form-control" value="">
          </div><!--/.form-group-->
          <div class="form-group">
            <label for="userPass">Password:</label>
            <input type="text" id="userPass" class="form-control" value="">
          </div><!--/.form-group-->
          <input type="submit" class="btn btn-primary pull-right" value="Login">
        </form><!--/#form-->
      </div><!--/.panel-body-->
    </div><!--/.panel-->

  </div><!--/#app-->
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
