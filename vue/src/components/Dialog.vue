<template>
  <router-link to="/dialogue" class="dialogue">
    <div class="wrapper">
      <div>
        <Avatar size="xs" />
      </div>
      <div class="content">
        <div class="info">
          <div class="user_name">Дмитрий Деркач</div>
          <div class="last_message_time">23:19</div>
        </div>
        <div class="msg_crop">
          <div><Avatar size="s" /></div>
          <div class="msg_crop_text">
            К завтрашнему уроку запомнить газовые законы, а тоК завтрашнемsda
          </div>
        </div>
        <hr />
      </div>
    </div>
  </router-link>
</template>

<script>
import Avatar from "./Avatar";

export default {
  name: "Messanger",
  components: { Avatar,},
};
</script>

<style scoped>
.dialogue {
  width: 100%;
  height: 70px;
  font-size: 13px;
  box-sizing: border-box;
  padding: 5px 12px 0px 12px;
  cursor: pointer;
}
.dialogue:hover {
  background-color: #f0f2f5;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  overflow-y: hidden;
}

.content .info {
  display: flex;
  flex-direction: row;
}

.content .info .user_name {
  font-weight: 600;
  color: #2d3436;
}
.content .info .last_message_time {
  color: #636e72;
  margin-left: auto;
}
.content .msg_crop {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.content .msg_crop_text {
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
  overflow-x: hidden;
}
</style>