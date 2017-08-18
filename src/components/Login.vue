<template>
  <div class="login">
    请稍后，正在跳转到登陆中心...
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    // axios.get(app.api.login).then((res) => {
    //   location.href = res
    // })
  }
}
</script>

<style lang='scss' scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
