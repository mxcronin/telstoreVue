import gql from 'graphql-tag';
import { getValue, locale } from '../../common/shared';
import productMixin from '@/mixins/productMixin';

export default {
  props: {
    sku: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    product: null,
  }),
  mixins: [productMixin],
  computed: {
    attributes() {
      const { allVariants } = this.product.masterData.staged
        || this.product.masterData.current;
      const { sku } = allVariants[0];
      const sku2 = allVariants.map(({ sku }) => sku)
      return sku2
    },
    matchingVariant() {
        return this.currentProduct || {};
    }
  },
  apollo: {
    product: {
      query: gql`
        query VariantSelector(
          $sku: String!
          $preview: Boolean!
          $locale: Locale!
        ) {
          product(sku: $sku) {
            id
            masterData {
              current @skip(if: $preview) {
                allVariants {
                  sku
                  attributesRaw {
                    attributeDefinition {
                      name
                      label(locale: $locale)
                      type {
                        name
                      }
                    }
                    value
                  }
                }
              }

              staged @include(if: $preview) {
                allVariants {
                  sku
                  attributesRaw {
                    attributeDefinition {
                      name
                      label(locale: $locale)
                      type {
                        name
                      }
                    }
                    value
                  }
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          locale: locale(this),
          sku: this.sku,
          preview:
            this.$route.query.preview === 'true' || false,
        };
      },
    },
  },
};
