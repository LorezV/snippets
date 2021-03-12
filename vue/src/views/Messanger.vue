<template>
  <div class="page_wrapper">
    <div class="wrapper m">
      <div class="static_window">
        <StaticWindowHeader text="Сообщения"/>
        <Search />
        <hr>
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
      </div>
    </div>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import Search from "../components/Search";
import StaticWindowHeader from "../components/StaticWindowHeader"

export default {
  name: "Messanger",
  components: {
    Dialog,
    Search,
    StaticWindowHeader,
  },
};
</script>

<style scoped>
.static_window {
  padding: 0px;
  padding-bottom: 12px;
}
</style>