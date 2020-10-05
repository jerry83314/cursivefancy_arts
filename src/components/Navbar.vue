<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img width="40px" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg" alt="">
          CursiveFancy
      </router-link>
      <div>
        <router-link class="mobile-cart d-md-none position-relative" to="/cart">
          <i data-v-575db61a="" class="fas fa-shopping-cart text-gray"></i>
          <span class="badge badge-pill badge-danger position-absolute" v-if="carts.length">{{ carts.length }}</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link class="nav-item nav-link mr-4" to="/about">關於品牌</router-link>
              <router-link class="nav-item nav-link mr-4" to="/products">產品列表</router-link>
              <router-link class="nav-item nav-link mr-4 position-relative d-none d-md-block" to="/cart">
                <i data-v-575db61a="" class="fas fa-shopping-cart"></i>
                <span class="badge badge-pill badge-danger position-absolute" v-if="carts.length">{{ carts.length }}</span>
              </router-link>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  created () {
    const vm = this
    vm.getCarts()
    vm.$bus.$on('cart-total', function () {
      vm.getCarts()
    })
  },
  methods: {
    getCarts () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`

      vm.axios.get(url)
        .then((res) => {
          vm.carts = res.data.data
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-brand{
    font-weight: 500;
  }
  .nav-link{
    font-weight: bold;
  }
  .badge-pill {
    top: 5px;
    right: -15px;
  }
  @media screen and (max-width: 768px) {
    .mobile-cart {
      margin-right: 30px;
      .badge-pill {
        top: -3px;
        right: -22px;
      }
    }
  }
</style>
