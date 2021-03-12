<template>
  <div class="avatar" :class="size">
    <img v-if="src" :src="src" alt="" />
    <img v-else src="static/assets/images/avatar.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "avatar",
  props: {
    size: String,
    src: String,
  },
  data () {
    return {
      href: this.src,
    }
  }
};
</script>

<style scoped>
.avatar {
  background-size: cover;
  box-sizing: border-box;
  background-position: 0px 0px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
}
.avatar.l img {
  border-radius: 5px;
}

.avatar.s {
  width: 30px;
  height: 30px;
}
.avatar.xs {
  width: 50px;
  height: 50px;
}
.avatar.m {
  width: 80px;
  height: 80px;
}
.avatar.l {
  width: 200px;
  height: 200px;
  border-radius: 0px;
}

@media (max-width: 992px) {
  .avatar.l {
    width: 80px;
    height: 80px;
  }
  .avatar.l img {
    border-radius: 15px;
  }
}
</style>