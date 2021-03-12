<template>
  <div class="page_wrapper">
    <div class="wrapper xs">
      <div class="static_window">
        <div class="tabs">
          <button class="slide">Друзья</button>
          <button class="slide">Онлайн</button>
          <button class="slide">Заявки</button>
        </div>
        <!-- <div v-for="friend in user_data.friends" :key="friend.id" class="friend">
          <div class="friend_wrapper">
            <Avatar size="m" :src="friend.avatar_url" />
            <div class="friend_info">
              <router-link class="friend_name" :to="{ name: 'profile', params: { username: friend.username } }"
                >{{ friend.first_name }} {{ friend.last_name }}</router-link
              >
              <span class="friend_desc">{{ friend.profession }}</span>
              <span class="friend_desc">{{ friend.city }}</span>
            </div>
            <div class="buttons_container">
              <button class="slide message_friend">Написать</button>
              <button class="slide delete_friend">Удалить</button>
            </div>
          </div>
        </div> -->
          <div v-for="friend in 10" :key="friend.id" class="friend">
          <div class="friend_wrapper">
            <Avatar size="m" src="https://sun7-6.userapi.com/s/v1/ig2/EpTDmFqaLiHv9co1_AYehYW4DKKnWPDg7PGYB0Ud0VkFz8WEYxOgfN3fIsEVvEyl5iu66_m_hTArQLNVdkoAB46A.jpg?size=200x0&quality=96&crop=517,444,200,200&ava=1" />
            <div class="friend_info">
              <router-link class="friend_name" :to="{ name: 'profile', params: { username: friend.username } }"
                >Имя Фамилия</router-link
              >
              <span class="friend_desc">Профессия (если указана)</span>
              <span class="friend_desc">Город (если указан)</span>
            </div>
            <div class="buttons_container">
              <button class="slide message_friend">Написать</button>
              <button class="slide delete_friend">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
import utils from '../utils'

export default {
  name: "Friends",
  props: {
    username: String
  },
  components: {
    Avatar,
  },
  data() {
    return {
      user_data: {},
    };
  },
  methods: {
    updateData: async function () {
      this.user_data = await utils.fetchUser(this.username);
      this.user_data.friends = await utils.fetchUserFriends(this.user_data.id);
    },
  },
  mounted: async function () {
    await this.updateData();
  },
  watch: {
    "$route.params.id": {
      handler: async function () {
        await this.updateData();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.friend {
  padding: 12px;
  hr {
    margin: 6px 0px 0px 0px;
  }
}
.friend_wrapper {
  width: 100%;
  display: flex;
}
.friend_info {
  display: flex;
  flex-direction: column;
  margin: 0px 6px 0px 6px;
}
.friend_desc {
  font-size: 12px;
}
.buttons_container {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.delete_friend {
  background: #e84118;
  color: white;
}
.tabs {
  display: flex;
  padding: 12px 0px 12px 0px;

  button.slide {
    margin: 0px 6px 0px 6px;
  }
}
</style>