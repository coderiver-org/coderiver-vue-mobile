<template>
  <div class="welcome_wrap">
    <img class="logo_img" src="@/common/image/logo.png" alt=".">
    <footer class="works">
      <span>CodrRiver©2018</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  mounted () {
    setTimeout(() => {
      this.$router.replace({ name: 'Home' })
    }, 3000)
  }
}
</script>
<style scoped lang="scss">
.welcome_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  padding-top: 482px;
  .logo_img {
    display: block;
    width: 315px;
    height: 231px;
    margin: 0 auto;
  }
  .works {
    position: absolute;
    bottom: 25px;
    width: 100%;
    font: 20px "Adobe Heiti Std R";
    color: #18262a;
    text-align: center;
  }
}
</style>
