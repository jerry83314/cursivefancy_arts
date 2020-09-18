<template>
  <div>
    <div class="container">
      <navbar></navbar>
    </div>

    <!-- Carousel -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-item-img"
            style="background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/pBxq3oOiHPduPUpI0HETWZrVPZUi4aotaTDHQ7Sd35yrH3WVHFboT2ew3aozdBsQaBMpF7WIZEVZTRosOxMCZsmFiW1Gx7zDlUBmSjfWwyc4SQVtCtBbmPDAY3k6TZlF.jpg);"
          ></div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-img"
            style="background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/C2kCFX4gn9kLPGv2FE0CrYDAwwEEsMRv2Qo1z8Z27vU3FRJP6qgY2u8AY2yz8nfAoT5dNt3wvXCuxqMYSh1s73omTMEnSCCSa2mzSlTQwnvQTM1rBTAHKrcR3yqsdGiy.jpg);"
          ></div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-img"
            style="background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a8yAMH9KMWcakUmsL6eWatFnRfMf7kvdxFsoLUWwakIWP3N6KFw5ZvoZYdOch7CE4V3dXw7vEoY93Ly2v5cVuCzYsz0RwcmzD5NkX15mmDY8Aew5cEk4CuRIjct1CALr.jpg);"
          ></div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- 品牌介紹 -->
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3 mx-auto">
          <h2 class="newsComponent__title text-gray my-4 my-sm-5 p-1">品牌介紹</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img data-aos="fade-up" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/jD9ziga8DND7umdJDXNi6js77CvCv1YEJr2934t6OzLSLa3x3cfk1DJxCEfqRyQRfpA00y3tqNdsjSzuq4QQuRwoBczMzwmgg3u6bwgPux67hvWvEzCQDFDlKpGYIQx2.jpg" alt="遇扇坊" class="img-fluid">
        </div>
        <div class="col-md-6 m-auto text-center">
          <p class="text-main mt-4 mt-sm-0 mb-0">遇扇坊（CursiveFancy)，主營書藝作品，包含扇類（如摺扇、團扇）、傳統書畫（如掛軸、卷軸、對聯），以及畫仙板等各類型制之作。<br>
            <br>我們的作品，是書道人一筆一畫悉心而就，每一幅筆走龍蛇墨氣舒健之作，皆蘊含獨特韻味，淬冶著書家職人的溫度，以及對藝術的虔誠與熱愛。<br>
            <br>遇扇坊，以「遇」字為精神核心。對我們而言，每件獨特作品與每位收藏者的邂逅，都出自緣分的連繫。欣賞一件佳作，猶如認識一位陪伴我們品味雅興的良友。因此，我們期望收藏者們能在遇扇坊找到專屬於你的典藏品。<br>
            <br>遇扇坊出品形式豐富多樣，內容除了提供客製服務，亦可託付書道家發揮靈感。我們的作品除了用於室內居家擺飾，亦經常作為收藏者與親友間的高雅餽贈之禮。無論是宜室、宜家、或宜人，傳遞著書道家與收藏者每份赤誠濃郁的心意。<br>
          </p>
        </div>
      </div>
    </div>

    <!-- 作者簡介 -->
    <div class="container my-4 my-sm-5">
      <div class="row">
        <div class="col-6 col-md-3 mx-auto">
          <h2 class="newsComponent__title text-gray mb-4 mb-sm-5 p-1">作者簡介</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0 h-100">
            <img data-aos="fade-up" :src="authorImg.img_1" class="card-img-top rounded-0" alt="創作者的貼身簡介" />
            <div class="card-body text-center mb-2">
              <h4 class="mt-3 mb-2 text-gray">創作者的貼身簡介</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-main mb-0 text-left">
                  <strong>張維晏</strong>，書道家、作家、文史研究者，擁有藝術史學研究的專業學術養成背景，以及豐富的整合行銷、出版和策展經驗。
                </p>
              </div>
            </div>
            <div class="card-footer text-right">
              <a target="_blank" href="https://arthistorystrolls.com/2020/05/18/%e8%80%8d%e5%bb%a2%e6%8f%90%e9%ab%98%e6%95%88%e7%8e%87%ef%bc%9f%e7%9c%8b%e5%8a%87%e6%9c%89%e5%8a%a9%ef%bd%8f%ef%bd%8f%ef%bc%9f%e5%b0%88%e8%a8%aa%e3%80%88%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a/?fbclid=IwAR3JwGXsjaMiZGzkw2krZC8EO6LIucCCxeBj0jpyuY0eMZj1Ct60BJZUJhQ" class="btn btn-outline-gold">作者專訪</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3 mt-sm-0">
          <div class="card border-0 h-100">
            <img data-aos="fade-up" :src="authorImg.img_2" class="card-img-top rounded-0" alt="旅行與美的視覺書寫" />
            <div class="card-body text-center">
              <h4 class="mt-3 mb-2 text-gray">旅行與美的視覺書寫</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-main mb-0 text-left">
                  掌握藝術與文字工作者的雙重身分，以獨特視角以及細膩的鏡頭，捕捉旅行時每個探訪之地的濃厚韻味，以人文滋養靈感，以自然抒創作之欲。
                </p>
              </div>
            </div>
            <div class="card-footer text-right">
              <a target="_blank" href="https://www.facebook.com/%E6%BC%AB%E9%81%8A%E8%97%9D%E8%A1%93%E5%8F%B2-1825133984386459" class="btn btn-outline-gold">漫遊藝術</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3 mt-sm-0">
          <div class="card border-0">
            <img data-aos="fade-up" :src="authorImg.img_3" class="card-img-top rounded-0" alt="怦然心動的古雅逸品" />
            <div class="card-body text-center mb-2">
              <h4 class="mt-3 mb-2 text-gray">怦然心動的古雅逸品</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-main mb-0 text-left">
                  遇扇坊的每件作品，都是書道人一筆一畫悉心而就獨一無二，淬冶著熾烈的匠心溫度，以及對藝術的虔誠與熱愛。願我們的作品，能帶給每位收藏者由衷的祝福與幸運。
                </p>
              </div>
            </div>
            <div class="card-footer text-right">
              <router-link class="btn btn-outline-gold" to="/products">看作品去</router-link>
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
      authorImg: {
        img_1: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/yHskpcyIA7xwVORx7D9GvDNkDlfYK9672RBkDxiJUJsgri1rjzz37ZhzFvitcT8j1NXDYrfI9CYvzeDxThvimWMjemDlNoOLZlc05bhbV7cjM88msBO99VbjOsQDja9Y.jpg',
        img_2: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1IqQyYT8tavyb2a2Wi1oohPvwNT4w4agC5wHgJOgoc1NqTBJCmhAdii1Z6e3bPGs3MxqRbsStqDO6zxOKKjVIuXYmkb8XtT64QSE8qVQNkdL9YGF3w0rTd5wi4eeXYiH.jpg',
        img_3: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/oe5tdK3KjkmmNkvId4yzVhhkPrFe3bdC9s4IptAzRZYDXuXTTscYgg2ybTrKS4qvWPzkPg3gfSun1vJ5xXFA0utyng5j3PINXEwNGv1mquEnPdCZweM2gaHmk8kOI2DE.jpg'
      }
    }
  }
}
</script>

<style lang="scss">
  .carousel-inner {
    height: 500px;
  }
  .carousel-item-img {
    width: 100%;
    height: 600px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
  }
</style>
