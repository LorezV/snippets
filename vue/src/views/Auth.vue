<template>
  <div class="page_wrapper">
    <div class="wrapper m">
      <div class="static_window">
        <span>Авторизация</span>
        <div class="form">
          <ul>
            <li class="form_error" v-for="error in formErrors" :key="error.key">
              {{ error }}
            </li>
          </ul>
          <div class="form_field" v-for="field in formModel" :key="field.key">
            <input
              v-model="field.value"
              :type="field.type ? field.type : 'text'"
              :placeholder="field.placeholder"
            />
          </div>
          <button class="slide" @click="validateForm()">Войти</button>
          <div class="variant">
            Еще нет аккаунта?
            <router-link class="link" :to="{ name: 'register' }"
              >Зарегистрироваться</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  components: {},
  data() {
    return {
      formModel: {
        username: {
          placeholder: "Имя пользователя",
          value: "",
        },
        password: {
          placeholder: "Пароль",
          value: "",
          type: "password",
        },
      },
      formErrors: [],
    };
  },
  methods: {
    _submitForm: async function (data) {
      await this.$store.dispatch("authUser", data).then((result) => {
          if (!result) {this.formErrors = ['Такого пользователя не существует.']; return;}
          this.$router.push({name: 'news'})
      })
    },
    validateForm: async function () {
      this.formErrors = [];
      let data = {};
      for (let key in this.formModel) {
        data[key] = this.formModel[key].value;
      }

      if (this.formModel.username.value.length == 0) this.formErrors.push("Вы не указали логин.");
      if (this.formModel.username.value.length > 150) this.formErrors.push("Логин не может быть длинеее 150 символов.");
      if (this.formModel.password.value.length == 0) this.formErrors.push("Вы не указали пароль.");
      if (this.formModel.password.value.length > 150) this.formErrors.push("Пароль не может быть длинеее 32 символов.");


      if (this.formErrors.length > 0) return
      await this._submitForm(data);
    },
  },
};
</script>

<style lang='scss' scoped>
.form {
  .form_field {
    input {
      border: none;
      outline: none;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      font-family: Montserrat;
      font-size: 14px;
    }
  }
}

ul {
  .form_error {
    color: red;
    font-weight: 700;
    font-size: 14px;
    list-style-position: inside;
    list-style-type: circle;
  }
}

.variant {
  font-size: 12px;
  text-align: center;
  margin-top: 6px;
  .link {
    color: #0984e3;
    text-decoration: underline;
  }
}
.static_window {
  display: flex;
  flex-direction: column;
}

.wrapper {
  align-self: center;
}
</style>