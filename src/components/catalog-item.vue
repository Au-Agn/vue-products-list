<template>
  <tr>
    <td class="image">
      <router-link :to="'/product/' + productData.id">
        <img :src="productData.img" />
      </router-link>
    </td>
    <td>
      <div>
        <router-link :to="'/product/' + productData.id">
          <h2>
            {{ productData.name }}
          </h2>
        </router-link>
      </div>
      <div class="text">
        <p>{{ productData.description }}</p>
      </div>
    </td>
    <td>
      <span>{{ productData.price.value }}</span
      >&nbsp;
      <span>{{ productData.price.currency }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    productData: {},
  },
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
