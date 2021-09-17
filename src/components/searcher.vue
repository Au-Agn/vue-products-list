<template>
  <div class="cell small-6">
    <div class="grid-x align-middle">
      <div class="cell shrink wrapper">
        <input
          class="text-input"
          type="text"
          v-model="searchValue"
          @keypress.enter="search(searchValue)"
        />
        <input
          class="btn__delete"
          :style="{ display: searchValue ? 'block' : 'none' }"
          type="image"
          src="https://img.icons8.com/material-sharp/24/cacaca/multiply.png"
          @click="clean"
        />
      </div>
      <div class="cell shrink btn__search">
        <input
          type="image"
          src="https://img.icons8.com/ios-glyphs/30/1779ba/search--v1.png"
          @click="search(searchValue)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searcher",
  data() {
    return {
      searchValue: "",
      filteredProducts: [],
    };
  },
  props: {
    productsData: {
      type: Array,
      default: [],
    },
  },
  methods: {
    search(value) {
      if (value) {
        this.filteredProducts = this.productsData.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
        this.$emit("showSearchValue", this.filteredProducts);
      } else {
        return this.$emit("showSearchValue", null);
      }
    },
    clean() {
      this.searchValue = "";
      this.$emit("showSearchValue", null);
    },
  },
  watch: {
    searchValue(value) {
      if (!value.length) {
        this.clean();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.text-input {
  width: 300px;
}
.btn {
  &__delete {
    display: none;
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
  }
  &__search {
    margin-left: 8px;
  }
}
</style>
