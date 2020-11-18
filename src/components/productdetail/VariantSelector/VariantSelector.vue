<script src="./VariantSelector.js"></script>

<template>
  <div v-if="product">
    {{attributes}}
    <ul class="list-inline"
        data-test="variant-selector-list">
      <li v-for="(sku) in attributes"
          :key="sku">
        <!-- <AttributeSelect
          :product="product"
          :values="values"
          :sku="sku"
          :name="name"
          :id="id"
          :selected="selected"
          :variantCombinations="variantCombinations"
        /> -->
      </li>
    </ul>
  </div>

</template>
