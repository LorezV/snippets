<template>
    <div class="page_wrapper">
      <div class="wrapper xs">
        <div class="static_window" id="profile">
          <div class="info">
            <div class="avatar_wrapper">
              <Avatar size="l" src="./static/assets/images/avatar.jpg" />
            </div>
            <div class="info__text">
              <div>
                <!-- <span class="user_name">{{ user_data.first_name }} {{ user_data.last_name }}</span
                > -->
                <span class="user_name">Имя Фамилия</span
                >
                <br />
                <!-- <span class="user_status active">{{ user_data.status }}</span> -->
                <span class="user_status active">Крепкий орешек</span>
              </div>
              <table>
                <tr>
                  <td>Дата рождения:</td>
                  <!-- <td>{{ user_data.birth_day }}</td> -->
                  <td>17.10.2004</td>
                </tr>
                <tr>
                  <td>Город:</td>
                  <!-- <td>{{ user_data.city }}</td> -->
                  <td>Оренбург</td>
                </tr>
                <tr>
                  <td>Профессия:</td>
                  <!-- <td>{{ user_data.profession }}</td> -->
                  <td>Ученик</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="static_window">
          <div class="user-images">
            <img
              src="static/assets/images/example/1.jpg"
              class="image min"
              onclick="onInputOnImage(this)"
            />
            <img
              src="static/assets/images/example/2.png"
              class="image min"
              onclick="onInputOnImage(this)"
            />
            <img
              src="static/assets/images/example/3.jpg"
              class="image min"
              onclick="onInputOnImage(this)"
            />
            <img
              src="static/assets/images/example/1.jpg"
              class="image min"
              onclick="onInputOnImage(this)"
            />
          </div>
        </div>
      </div>
      <div class="wrapper m">
        <div class="static_window">
          <Search />
        </div>
        <!-- <Post v-for="post in user_data.posts" :key="post.id" :PostModel="post" /> -->
        <Post v-for="i in 10" :key="i.key" :PostModel="{ publish_date: '12.12.21', publish_time: '23:00', author: {avatar_url: './static/assets/images/avatar.jpg', username: 'Имя Фамилия'}, text: 'Velit sint do qui cupidatat consectetur nulla cillum sit nisi anim cillum ullamco do mollit. Magna ut in excepteur enim veniam culpa incididunt. Do nostrud eiusmod magna ullamco consequat duis non. Ex magna non duis sit ex cillum do aliquip.' }" />
      </div>
    </div>
</template>

<script>
import Post from "../components/Post";
import Search from "../components/Search.vue";
import Avatar from "../components/Avatar";
// import utils from '../utils'

export default {
  name: "Profile",
  props: {
    username: String
  },
  components: {
    Post,
    Search,
    Avatar,
  },
  data() {
    return {
      user_data: {},
    };
  },
  methods: {
    // updateData: async function () {
    //   this.user_data = await utils.fetchUser(this.username)
    //   this.user_data.posts = await utils.fetchUserPosts(this.user_data.id)
    // }
  },
  // mounted: async function () {
  //   await this.updateData()
  // },
  watch: {
    '$route.params.id': {
      handler: async function () {
        await this.updateData()
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.avatar_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.user-images {
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: space-evenly;
}
.slider {
  font-size: 30px;
}
</style>