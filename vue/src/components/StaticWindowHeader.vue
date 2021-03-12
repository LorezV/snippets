<template>
  <div class="header">
    <span class="title">{{ text }}</span>
    <div class="drag-placeholder"></div>
  </div>
</template>


<script>
export default {
  name: "sw_header",
  props: {
    text: String,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/static/assets/styles/utils.scss";

.drag-placeholder {
  width: 100%;
  height: 100%;
}
.header {
  background-color: #fafbfc;
  width: 100%;
  height: 40px;
  box-sizing: border-box;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 14px;
  font-weight: 600;

  display: flex;
  align-items: center;

  .title {
    color: $dark-color;
  }
}
</style>