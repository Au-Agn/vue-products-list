<template>
  <div class="cell small-6">
    <div class="grid-x align-right">
      <div class="dropdown menu">
        <button @click="areOptionsVisible = !areOptionsVisible" class="button">
          Sort by
        </button>
        <div
          class="options"
          :style="{ display: areOptionsVisible ? 'block' : 'none' }"
        >
          <p class="options__item" @click="sortByPrice(true)">
            Price: Low to High
          </p>
          <p class="options__item" @click="sortByPrice(false)">
            Price: High to Low
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Selector",
  data() {
    return {
      areOptionsVisible: false,
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
    sortByName() {
      return this.productsData.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByPrice(value) {
      if (value) {
        return this.productsData.sort(
          (a, b) => a.price.value - b.price.value
        );
      } else {
        return this.productsData.sort(
          (a, b) => b.price.value - a.price.value
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.options {
  border: solid 1px #aeaeae;
  background: #ffffff;
  position: absolute;
  top: 40px;
  right: 0;
  padding: 10px;
  width: 170px;

  &__item {
    padding: 2px 5px;
    cursor: pointer;
  }
  &__item:hover {
    background: #e6e6e6;
  }
}
</style>
