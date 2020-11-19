<script src="./VariantList.js"></script>

<template>
  <div v-if="product">
    <div style="padding: 20px 0 20px 0">
      <h2>Farver</h2>
      </div>
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