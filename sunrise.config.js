export default {
  ct: {
    auth: {
      host: process.env.VUE_APP_CT_AUTH_HOST || 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: process.env.VUE_APP_CT_PROJECT_KEY || 'telecom',
      credentials: {
        clientId: process.env.VUE_APP_CT_CLIENT_ID || 'ejhXZJVc4W6HQdkoq4SdWkfk',
        clientSecret: process.env.VUE_APP_CT_CLIENT_SECRET || 'RXjsrQPbSRPwTFQ2VSY8kBKIdnc-Xua9',
      },
      scopes: [process.env.VUE_APP_CT_SCOPE || 'manage_my_profile:telecom create_anonymous_token:telecom'
      + ' manage_my_payments:telecom view_products:telecom manage_my_orders:telecom'
      + ' manage_my_shopping_lists:telecom'],
    },
    api: process.env.VUE_APP_CT_API_HOST || 'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    en: 'English',
    de: 'Deutsch',
    'en-GB': 'English'
  },
  countries: {
    DE: 'Deutschland',
    US: 'United States',
    DK: 'Danmark'
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: 'currency',
          currency: 'DKK',
          currencyDisplay: 'symbol',
        },
      },
      DK: {
        currency: {
          style: 'currency',
          currency: 'DKK',
          currencyDisplay: 'symbol',
        },
      },
      US: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      DE: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    { name: 'size', type: 'text' },
    { name: 'color', type: 'lnum', component: 'colors' },
    { name: 'designer', type: 'enum', component: 'designer' },
  ],
  detailAttributes: [
    'designer', 'colorFreeDefinition', 'size', 'style', 'gender', 'articleNumberManufacturer', 'Brand', 'Memory'
  ],
  variantSelector: [
    'color', 'size',
  ],
  variantInProductName: [
    'size',
  ],
};
