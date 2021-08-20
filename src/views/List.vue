<template>
  <div>
    <h1>List</h1>
    <hr />
    <table v-if="products.length" class="unstriped hover">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product info</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
          <td class="image">
          <router-link v-bind:to="'/product/'+ product.id">
            <img v-bind:src="product.img" />
          </router-link>
          </td>
          <td>
            <div>
              <router-link
                v-bind:to="'/product/'+ product.id"
              >
              <h2>
                {{ product.name }}
              </h2>
              </router-link>
            </div>
            <div class="text">
              <p>{{ product.description }}</p>
            </div>
          </td>
          <td>
            <span>{{ product.price.value }}</span>&nbsp;
            <span>{{ product.price.currency }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No products</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(data => this.products = data)
      .catch(err => console.log(err.message))
  }
};
</script>

<style lang="scss" scoped>
.image {
    width: 200px;
}
td {
    vertical-align: top;
}
.text {
    max-width: 600px;
}
</style>
