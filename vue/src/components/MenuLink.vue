<template>
  <router-link
    :to="href"
    class="menu-link"
    onmouseover="menuItemControl(this)"
    onmouseout="menuItemControl(this)"
  >
    <img :src="icon" :alt="text" />
    <div class="menu-link__desc">
      <span>{{ text }}</span>
    </div>
    <span v-if="notifications > 0" class="notifications"></span>
  </router-link>
</template>

<script>
export default {
  name: "menu-link",
  props: {
    href: Object,
    icon: String,
    text: String,
    notif: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      notifications: this.notif,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../public/static/assets/styles/utils.scss";
.menu-link {
  padding: 30%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  width: 100%;
}
.menu-link:hover {
  background: $menu-color;
}
.menu-link:last-child {
  margin-top: auto;
}
.notifications {
  position: absolute;
  transform: translate(130%);
  width: 10px;
  height: 10px;
  background-color: #eb4d4b;
  border-radius: 15px;
}

.menu-link__desc_ {
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 6px;
}

.menu-link__desc {
  font-size: 14px;
  position: absolute;
  background-color: $menu-color;
  width: 100px;
  height: 48px;

  border-right: 2px solid #eb4d4b;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;
  transform: translate(-200%, -14px);

  z-index: 10;
}
.menu-link__desc span {
  color: white;
}
.menu-link__desc.active {
  transform: translate(34px, -14px);
}
.menu .wrapper .container .menu-link img {
  width: 100%;
  height: auto;
  transition: 0.1s;
}
.menu .wrapper .container .menu-link img:hover {
  transform: rotate(-15deg) scale(0.8);
}
@media (max-width: 992px) {
  .menu-link {
    padding: 0px;
    width: auto;
  }
  .notifications {
    transform: translate(200%);
  }
  .menu-link__desc {
    display: none;
  }
  .menu .wrapper .container .menu-link:last-child {
    margin-top: 0px;
  }
}
</style>