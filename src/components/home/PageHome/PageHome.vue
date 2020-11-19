<script src="./PageHome.js"></script>
<style src="./PageHome.scss" lang="scss"></style>

<template>
<span>
  <div style="width: 1000px; margin: auto">
      <img style="width: 1000px;" src="assets/img/iphones.jpg" alt="banner" />
  </div>
  <div style="width: 1000px; margin: auto">  
  <div class="banner-area pt-30">
    <div class="custom-container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-xs-12">
          <div
            class="banner-wrap mb-30 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="banner-img banner-hover banner-zoom">
              <router-link
                :to="{ name: 'products', params: { categorySlug: 'smartphones' } }"
              >
                <img src="assets/img/iphones.jpg" alt="banner" />
                <div class="banner-content">
                  <h3>mobiler</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12">
          <div
            class="banner-wrap mb-30 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="banner-img banner-hover banner-zoom">
              <router-link
                :to="{ name: 'products', params: { categorySlug: 'plans' } }"
              >
                <img style="height: 170px" src="assets/img/plans.png" alt="banner" />
                <div class="banner-content">
                  <h3>plans</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
  </div>
  <div class="service-area pt-70 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="service-wrap mb-30 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-icon">
              <i class="las la-shipping-fast"></i>
            </div>
            <div class="service-content">
              <h6>Free Worldwide Shipping</h6>
              <p>
                On all orders over {{ $store.state.country === 'DE' ? '€' : '$'
                }}100
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="service-wrap mb-30 wow fadeInUp" data-wow-delay="0.2s">
            <div class="service-icon">
              <i class="las la-coins"></i>
            </div>
            <div class="service-content">
              <h6>30 Days Money Returns</h6>
              <p>30 days money back guarantee</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="service-wrap mb-30 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-icon">
              <i class="las la-headphones"></i>
            </div>
            <div class="service-content">
              <h6>Support 24/7</h6>
              <p>Offered in the country of usage</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="service-wrap mb-30 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-icon">
              <i class="las la-shield-alt"></i>
            </div>
            <div class="service-content">
              <h6>100% Secure Checkout</h6>
              <p>Paypal / Visa / Master Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</span>

</template>
