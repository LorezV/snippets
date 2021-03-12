<template>
  <div class="menu">
    <div class="wrapper">
      <a href="" class="logo">
        <img src="static/assets/images/logo.png" alt="Логотип" />
      </a>
      <a href="" class="mobile_menu-link">Snippets</a>
      <nav class="container">
        <menu-link
          :href="{ name: 'profile', params: { username: 'asds' } }"
          icon="static/assets/images/svg/account.svg"
          text="Профиль"
        />
        <menu-link
          :href="{ name: 'news' }"
          icon="static/assets/images/svg/news.svg"
          text="Новости"
        />
        <menu-link
          :href="{ name: 'messanger' }"
          icon="static/assets/images/svg/messages.svg"
          text="Сообщения"
          :notif="4"
        />
        <menu-link
          :href="{ name: 'friends', params: { username: 'asd' } }"
          icon="static/assets/images/svg/friends.svg"
          text="Друзья"
        />
        <!-- <menu-link
          :href="{ name: 'community' }"
          icon="static/assets/images/svg/groups.svg"
          text="Сообщества"
        /> -->
        <!-- <menu-link
          href="exit"
          icon="static/assets/images/svg/quit_profile.svg"
          text="Выйти"
        /> -->
        <a href="logout" class="logout">
          <img src="static/assets/images/svg/quit_profile.svg" alt="Выйти" />
        </a>
      </nav>
    </div>
    <div class="hr-vertical"></div>
  </div>
</template>
<script>
import MenuLink from "./MenuLink";
import { mapGetters } from 'vuex'

export default {
  name: "Menu",
  components: {
    MenuLink,
  },
  data() {
    return {};
  },
  computed: mapGetters([''])
};
</script>

<style lang="scss" scoped>
@import "../../public/static/assets/styles/utils.scss";
.menu hr {
  width: 95%;
  height: 1px;
  border: none;
  background-color: $red-color;
  box-shadow: 0px 0px 10px rgba(255, 55, 55, 0.25);
}
.hr-vertical {
  width: 2px;
  height: 100%;
  background-color: $red-color;
  z-index: -9999;
}
.menu {
  position: relative;
  height: 100%;
  background-color: $menu-color;
  box-sizing: border-box;
  z-index: 1000;
  width: 50px;
  min-width: 50px;
  display: flex;
}
.menu .wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.menu .wrapper .container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 6px;
  padding-bottom: 6px;
}
.logo img {
  width: 100%;
  padding-top: 5px;
}
.mobile_menu-link {
  display: none;
  margin-left: 5px;
  padding-right: 5px;
  font-family: Caveat;
  font-size: 28px;
  font-weight: bold;
}
.logout {
  align-self: center;
  margin-top: auto;
}

@media (max-width: 992px) {
  .menu {
    max-width: 100%;
    width: 100%;
    height: 40px;
    position: absolute;
    border-radius: 0px;
    bottom: 0px;
  }
  .menu .wrapper {
    flex-direction: row;
  }
  .menu .wrapper .container {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .mobile_menu-link {
    display: block;
    background: linear-gradient(88.92deg, #fdcb6e 14.32%, #ff7675 88.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fdcb6e;
  }
  .logo {
    display: none;
  }
  .menu hr {
    display: none;
  }
}
</style>