<template>
    <div class="page_wrapper">
      <span class="fzf">404</span>
      <div class="wrapper">
        <img src="static/assets/images/404.png" alt="" />
      </div>
      <div class="wrapper">
        <h2>Sorry</h2>
        <span>But page not founded</span>
      </div>
    </div>
</template>

<script>

export default {
  name: "PageNotFound",
  components: {
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/static/assets/styles/utils.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 32px;
    background: $dark-color;
    color: white;
    padding: 6px;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
  }
  span {
    font-size: 28px;
  }
}
.fzf {
  position: absolute;
  top: 12px;
  transform: rotate(-10deg);
  font-size: 100px;
}
</style>