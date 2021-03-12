<template>
    <div class="page_wrapper">
      <div class="wrapper m">
        <div class="dialogue_header">
          <router-link to="messanger" class="button-back">
            <button class="slide">Назад</button>
          </router-link>
          <div class="header_title">
            <span class="header_title_name">Дмитрий Деркач</span>
            <span class="header_title_timelastactivity">12:44</span>
          </div>
          <Avatar class="avatar_tag" size="xs" />
        </div>
        <!-- Messages -->
        <div class="dialogue_wrapper">
          <div v-for="i in 14" :key="i" class="message">
            <Avatar size="xs" />
            <div class="text_block">
              <span>Сообщение: {{ i }}</span>
            </div>
          </div>
          <div class="message you">
            <Avatar size="xs" />
            <div class="text_block">
              <span>Сообщение:</span>
            </div>
          </div>
        </div>
        <!-- Input -->
        <div class="message_input">
          <button>
            <img
              class="action_image"
              src="assets/images/svg/attachment.svg"
              alt=""
            />
          </button>
          <input
            type="text"
            class="default"
            placeholder="Введите сообщение..."
          />
          <button>
            <img
              class="action_image"
              src="static/assets/images/svg/telegram.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import Avatar from "../components/Avatar";

export default {
  name: "Dialogue",
  components: {
    Avatar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
button.slide {
  max-width: 100px;
  height: 100%;
  background: none;
}
pre {
  overflow: scroll;
  max-height: 200px;
}
.avatar_tag {
  margin: 6px;
}
.button-back {
  padding: 0px 12px 0px 12px;
  height: 100%;
}
.button-back:hover {
  background: transparent linear-gradient(to right, #e5ebf1, white);
}
.wrapper {
  padding: 12px;
  display: flex;
  flex-direction: column;
}
.action_image {
  width: 20px;
  height: 20px;
}
.dialogue_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.header_title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header_title_name {
  font-weight: 800;
}
.header_title_timelastactivity {
  font-size: 12px;
  color: gray;
}

.dialogue_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: scroll;
  background: white;
  padding: 0px 12px 0px 12px;
}

.message {
  display: flex;
  align-items: flex-end;

  margin-top: 6px;
  margin-bottom: 6px;
}

.message.you {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.message .text_block {
  background: #f1f2f6;
  max-width: 60%;
  margin-left: 12px;
  margin-right: 12px;
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;

  word-wrap: break-word;
}
.message.you .text_block {
  background: #effdde;
}

.message_input {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfc;
  padding: 6px 12px 6px 12px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.message_input input {
  margin: 6px 6px 6px 6px;
}
</style>