<template>
  <div class="body">
    <Menu />
    <router-view v-slot="{ Component }">
      <transition name="no-mode-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <div class="debug" :v-if='this.$store.getters.localUserData != null'>
      <strong>Auth user data:</strong>
      <div
        v-for="(value, key) in this.$store.getters.localUserData"
        :key="key"
      >
        {{ key }} : {{ value }}
      </div>
    </div> -->
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu,
  },
  data: function () {
    return {};
  },
  methods: {
  },
  mounted: async function () {
    this.$store.dispatch("fetchUserData")
  },
};
</script>

<style lang="scss">
@import "../public/static/assets/styles/utils.scss";
@import "../public/static/assets/styles/static_window.scss";

#app {
  font-family: Montserrat;
}

.debug {
  width: 350px;
  height: 500px;
  border: 1px solid gray;
  right: 10px;
  z-index: 9999;
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.no-mode-fade-leave-active {
  opacity: 0;
}
.no-mode-fade-enter-active {
  transition: opacity 0.5s;
}
.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}

* {
  padding: 0;
  margin: 0;
  color: black;
}
button {
  background: none;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
}
a {
  color: $dark-color;
  outline: none;
  text-decoration: none;
}
hr {
  height: 1px;
  border: none;
  background-color: #e7e8ec;
}
.body {
  position: absolute;
  box-sizing: border-box;
  background-color: $menu-color;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
::-webkit-scrollbar {
  background: transparent;
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #26de81;
  box-shadow: -2px 0px 12px #26de81;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
.page_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0px auto 0px auto;
  overflow-y: auto;
  z-index: 1;
  background: $background-color;
}

.page_wrapper .wrapper {
  width: 100%;
}
.page_wrapper .wrapper.s {
  width: 400px;
}
.page_wrapper .wrapper.xs {
  width: 450px;
}
.page_wrapper .wrapper.m {
  width: 600px;
}
.page_wrapper .wrapper.min {
  width: 200px;
}

@media (min-width: 576px) {
  .container {
    width: 576px;
  }
}

@media (max-width: 992px) {
  body {
    flex-direction: column;
  }
  .page_wrapper {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 0px;
  }
  .page_wrapper .wrapper {
    max-width: 100%;
    width: 100%;
  }
  .page_wrapper .wrapper:last-child {
    padding-bottom: 40px;
  }
}
</style>
