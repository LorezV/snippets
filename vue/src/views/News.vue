<template>
  <div class="page_wrapper">
    <div class="wrapper m">
      <!-- <Post v-for="post in all_posts" :key="post.id" :PostModel="post" /> -->
      <Post v-for="i in 10" :key="i.key" :PostModel="{ publish_date: '12.12.21', publish_time: '23:00', author: {avatar_url: './static/assets/images/avatar.jpg', username: 'Имя Фамилия'}, text: 'Velit sint do qui cupidatat consectetur nulla cillum sit nisi anim cillum ullamco do mollit. Magna ut in excepteur enim veniam culpa incididunt. Do nostrud eiusmod magna ullamco consequat duis non. Ex magna non duis sit ex cillum do aliquip.' }" />
    </div>
    <div class="wrapper min">
      <div class="static_window">
        <div class="categories">
          <div class="category">
            <span class="title">Новости</span>
            <div class="category-list">
              <div class="category-item">
                <span>Категория 1</span>
              </div>
              <div class="category-item">
                <span>Категория 2</span>
              </div>
              <div class="category-item">
                <span>Категория 3</span>
              </div>
              <div class="category-item">
                <span>Категория 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "News",
  components: {},
  data() {
    return {
      all_posts: {}
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.category {
  .title {
    font-weight: 600;
  }
  .category-list {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .category-item {
      margin: 3px 0px 3px 0px;
    }
  }
}
</style>