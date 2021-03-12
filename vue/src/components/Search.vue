<template>
  <div class="ui_search">
    <div class="input_block">
      <img src="static/assets/images/svg/search.svg" alt="Лупа / Поиск" />
      <input
        class="input_field"
        type="text"
        placeholder="Поиск"
        onfocus="onInputFocus(this)"
        onblur="onInputBlur(this)"
        v-model="inputValue"
      />
      <svg
        onclick="clearSearchInput(this)"
        class="cross"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="#B2BEC3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1685 2.22254L16.406 0.460037L9.41846 7.44754L2.43096 0.460037L0.668457 2.22254L7.65596 9.21004L0.668457 16.1975L2.43096 17.96L9.41846 10.9725L16.406 17.96L18.1685 16.1975L11.181 9.21004L18.1685 2.22254Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    clearInput: function () {
      this.data.inputValue = "asd";
      console.log(this.data.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/static/assets/styles/utils.scss";
.ui_search {
  display: flex;

  .input_block {
    width: 100%;
    height: 40px;
    display: flex;

    img {
      height: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
    svg.cross {
      padding: 2px;
      box-sizing: border-box;
      transition: 0.3s;
      margin: auto;
      margin-right: 5px;
      display: none;
      animation: show_element 0.3s ease;
      cursor: pointer;
    }
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      box-sizing: border-box;
      padding-left: 6px;
      padding-right: 6px;

      &::placeholder {
        color: #b2bec3;
      }
    }
  }
}
@keyframes show_element {
  from {
    transform: rotate(-135deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>