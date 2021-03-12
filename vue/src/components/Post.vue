<template>
  <div class="static_window">
    <div class="post">
      <div class="header">
        <!-- <Avatar size="xs" :src="author.avatar_url"/> -->
        <Avatar size="xs" src="./static/assets/images/avatar.jpg"/>
        <div class="post_info">
          <!-- <div class="user_profile">{{ author.username }}</div> -->
          <div class="user_profile">Имя Автора</div>
          <div class="post_date">
            <em>{{ PostModel.publish_date }}</em> |
            <em>{{ PostModel.publish_time }}</em>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="post_text">
          <pre>{{ PostModel.text.substr(0, shortTextLength) }}<span v-if="(PostModel.text.length > shortTextLength) & !textExpanded">...</span></pre>
          <button
            @click="textExpanded = true"
            class="min"
            :class="{ hidden: textExpanded }"
            v-if="PostModel.text.length > shortTextLength"
          >
            Показать все
          </button>
          <pre
            class="text_minimized"
            :class="{ active: textExpanded, hidden: !textExpanded }"
            v-if="PostModel.text.length > shortTextLength"
            >{{ PostModel.text.substr(shortTextLength) }}</pre
          >
        </div>
      </div>
      <div class="post_footer">
        <!-- <div class="like_contaner">
          <button v-if="postLiked" @click="dislike()">
            <img src="static/assets/images/svg/liked.svg" />
          </button>
          <button v-else @click="like()">
            <img src="static/assets/images/svg/unliked.svg" />
          </button>
          <span>{{ PostModel.likes.length }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "Post",
  props: {
    PostModel: Object,
  },
  data() {
    return {
      shortTextLength: 512,
    };
  },
  methods: {
  },
  components: { Avatar },
};
</script>

<style lang='scss' scoped>
.post_footer {
  display: flex;

  .like_contaner {
    display: flex;
    align-items: center;

    span {
      margin: 0px 6px 0px 6px;
    }
  }
}

.post .header {
  display: flex;
  flex-direction: row;
}
.post .header .post_info {
  margin-left: 12px;
}

.post .content {
  margin-top: 6px;
  margin-bottom: 6px;
}
.post pre {
  margin-left: auto;
  margin-right: auto;
  width: 99%;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;

  font-family: Montserrat;
}
.post_date,
em {
  color: grey;
  font-size: 12px;
}
.post p {
  margin-left: auto;
  margin-right: auto;
  width: 99%;
}
.text_minimized {
  &.active {
    display: block;
  }
  &.hidden {
    display: none;
  }
}

.min {
  &.hidden {
    display: none;
  }
}
</style>