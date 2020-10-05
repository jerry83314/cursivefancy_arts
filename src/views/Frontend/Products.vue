<template>
  <div>
    <div class="container">
      <navbar></navbar>
    </div>

    <loading :active.sync="isLoading"></loading>

    <!-- 內容區 -->
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <!-- 分類選項 -->
        <div class="col-md-2">
          <ul class="category">
            <li class="bg-main"><a href="#" class="d-block p-3" @click.prevent="selectCategory('all')">全部商品</a></li>
            <li class="bg-main"><a href="#" class="d-block p-3" @click.prevent="selectCategory('artWork')">書法</a></li>
            <li class="bg-main"><a href="#" class="d-block p-3" @click.prevent="selectCategory('fan')">扇子</a></li>
            <li class="bg-main"><a href="#" class="d-block p-3" @click.prevent="selectCategory('paperBoard')">畫仙板</a></li>
          </ul>
        </div>
        <!-- 產品列表 -->
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4" v-for="item in filterProducts" :key="item.id">
              <div class="card mb-4 position-relative">
                <router-link :to="`/product/${ item.id }`">
                  <img :src="item.imageUrl[0]" class="card-img-top rounded-0" :alt="item.title">
                </router-link>
                <div class="card-body">
                  <h4 class="my-3">
                    <router-link :to="`/product/${ item.id }`" class="item__title">
                    {{ item.title }}
                    </router-link>
                  </h4>
                  <p class="text-muted text-left mt-3">{{ item.content }}</p>
                  <div class="d-flex justify-content-between mb-3">
                    <small class="mb-0"> 售價 : <del>{{ item.origin_price }}</del></small>
                    <p class="font-weight-bold mb-0">特價 : {{ item.price | thousands }}</p>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <router-link class="btn btn-outline-main btn-sm" :to="`/product/${ item.id }`">
                    查看更多
                  </router-link>
                  <button type="button" class="btn btn-outline-cart btn-sm ml-auto"
                    :disabled="status.loadingItem === item.id"
                    @click="addToCart(item)">
                    <i class="spinner-border spinner-border-sm" v-if="status.loadingItem === item.id"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import myFooter from '@/components/Footer.vue'

export default {
  components: {
    navbar,
    myFooter
  },
  data () {
    return {
      products: [],
      isLoading: false,
      status: {
        loadingItem: ''
      },
      filterProducts: [],
      category: 'all'
    }
  },
  created () {
    const vm = this
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`

    vm.isLoading = true

    vm.axios.get(url)
      .then((res) => {
        vm.products = res.data.data
        vm.filterProducts = res.data.data
        vm.isLoading = false
      })
      .catch((err) => {
        console.log(err.response)
        vm.isLoading = false
      })
  },
  methods: {
    // 加入購物車
    addToCart (item, quantity = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`

      vm.status.loadingItem = item.id
      vm.isLoading = true

      const cart = {
        product: item.id,
        quantity: quantity
      }

      vm.axios.post(url, cart)
        .then((res) => {
          vm.status.loadingItem = ''
          vm.isLoading = false
          vm.$bus.$emit('message:push', '加入成功', 'success')
          vm.$bus.$emit('cart-total')
        })
        .catch((err) => {
          console.log(err.response)
          vm.status.loadingItem = ''
          vm.isLoading = false
          vm.$bus.$emit('message:push', `${err.response.data.errors}`, 'danger')
        })
    },
    selectCategory (status) {
      const vm = this
      switch (status) {
        case 'all':
          vm.category = '全部'
          vm.filterProducts = vm.products
          break
        case 'paperBoard':
          vm.filterProducts = []
          vm.category = '畫仙板'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
        case 'fan':
          vm.filterProducts = []
          vm.category = '扇子類'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
        case 'artWork':
          vm.filterProducts = []
          vm.category = '書法類'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
      }
    }
  }
}
</script>

<style lang="scss">
  .card {
    border: .5px solid rgba(0,0,0,.1);
  }
  .category {
    padding: 0;
    li{
      list-style: none;
      border: 1px solid rgba(0,0,0,.125);
      a{
        color: white;
      }
    }
  }
  .item {
    &__title{
      color: #111;
      &:hover {
          color: #FBC02D;
          text-decoration: none;
          border-bottom: .5px solid #FBC02D;
      }
    }
  }
</style>
