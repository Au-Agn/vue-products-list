<template>
  <div class="cell small-6">
    <div class="grid-x">
      <input
        class="cell shrink"
        type="text"
        v-model="searchValue"
        @keypress.enter="search(searchValue)"
      />
      <button
        class="btn_search cell small-1"
        @click="search(searchValue)"
      ></button>
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
      default() {
        return []
      }
    },
  },
  methods: {
    search(value) {
      if (value) {
        this.filteredProducts = this.productsData.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
        this.$emit("searchValue", this.filteredProducts);
      } else {
        return this.$emit(
          "searchValue",
          (this.filteredProducts = [])
        );
      }
    },
  },
  watch: {
    searchValue(value) {
      if (!value.length) {
        this.search(this.searchValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  &_search:after {
    content: "\1F50D";
  }
}
</style>
