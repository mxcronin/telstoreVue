<script src="./VariantList.js"></script>

<template>
  <div v-if="product">
    <ul class="no-underline"
        data-test="variant-selector-list">
      <li v-for="(sku) in attributes"
          :key="sku">
       <router-link
            :to="productRoute(sku, sku)"
            data-test="product-thumbnail-name"
            >{{ sku }}
          </router-link>
      </li>
    </ul>
  </div>

</template>

<style scoped>
 
    .no-underline:visited {
      color: blue;
    }

</style>
