<style src="./ProductInfo.scss" lang="scss" scoped></style>
<i18n src="./ProductInfo.txt"></i18n>
<script src="./PlansInfo.js"></script>

<template>
  <div class="row">
    <div class="col-lg-7">
       <div class="shop-wrapper" v-if="products">
           P {{ category }}
        <div class="row">
          <ProductThumbnail
            @open-modal="openModal"
            v-for="product in products.results"
            data-test="product-list"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
