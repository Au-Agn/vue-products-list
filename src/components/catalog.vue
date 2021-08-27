<template>
  <div>
    <div class="grid-x wrap">
      <div class="cell small-6">
        <div class="grid-x">
          <input
            class="cell shrink"
            type="text"
            v-model="searchValue"
            @keypress.enter="search(searchValue)"
          />
          <button
            class="btn cell small-1"
            @click="search(searchValue)"
          ></button>
        </div>
      </div>
    </div>
    <hr />
    <table
      v-if="filteredProducts.length"
      class="unstriped hover"
    >
      <thead>
        <tr>
          <th>Image</th>
          <th>Product info</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <CatalogItem
          v-for="product in itemPerPage"
          :key="product.id"
          :productData="product"
        />
      </tbody>
    </table>
    <p v-else>No products</p>
    <div class="pagination grid-x align-right">
      <div
        class="page cell shrink"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
        :class="{ page__selected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CatalogItem from "./catalog-item";

export default {
  name: "Catalog",
  components: { CatalogItem },
  data() {
    return {
      searchValue: "",
      sortedProducts: [],
      maxItemPerPage: 2,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["products"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    },
    pages() {
      return Math.ceil(this.filteredProducts.length / this.maxItemPerPage);
    },
    itemPerPage() {
      let from = (this.pageNumber - 1) * this.maxItemPerPage;
      let to = from + this.maxItemPerPage;
      return this.filteredProducts.slice(from, to);
    },
  },
  methods: {
    ...mapActions(["getProducts"]),
    sortProductsBySearchValue(value) {
      if (value) {
        this.sortedProducts = this.products.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        return (this.sortedProducts = this.products);
      }
    },
    search(value) {
      this.sortProductsBySearchValue(value);
    },
    changePage(page) {
      this.pageNumber = page;
    },
  },
  watch: {
    searchValue(value) {
      if (!value.length) {
        this.sortProductsBySearchValue(this.searchValue);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  &:after {
    content: "\1F50D";
  }
}
.search {
  margin-right: 30px;
}
.wrap {
  padding-top: 35px;
}
.page {
  border: solid 1px #e7e7e7;
  padding: 10px;
  &:hover {
    background: #1779ba;
    color: #fefefe;
    cursor: pointer;
  }
  &__selected {
    background: #1779ba;
    color: #fefefe;
    cursor: pointer;
  }
}
</style>
