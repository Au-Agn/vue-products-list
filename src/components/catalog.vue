<template>
  <div>
    <div class="grid-x align-middle wrap">
      <Searcher
        :productsData="PRODUCTS"
        @searchValue="showSearchValue"
      />
      <Selector
        :productsData="filteredProducts"
      />
    </div>
    <hr />
    <table v-if="filteredProducts.length" class="unstriped hover">
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
import Searcher from "./searcher";
import Selector from "./selector";

export default {
  name: "Catalog",
  components: { CatalogItem, Searcher, Selector },
  data() {
    return {
      searchValue: "",
      sortedProducts: [],
      maxItemPerPage: 2,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
    pages() {
      return Math.ceil(this.filteredProducts.length / this.maxItemPerPage);
    },
    itemPerPage() {
      let from = (this.pageNumber - 1) * this.maxItemPerPage;
      let to = from + this.maxItemPerPage;

      if (this.filteredProducts.length <= this.maxItemPerPage) {
        return this.filteredProducts.slice(0, this.maxItemPerPage);
      } else {
        return this.filteredProducts.slice(from, to);
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    changePage(page) {
      this.pageNumber = page;
    },
    showSearchValue(data) {
      this.sortedProducts = data;
    },
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style lang="scss" scoped>
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
