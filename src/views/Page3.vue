<template>
  <div id="products">
    <div 
      id="container" 
      class="container"
    >
      <div class="back">
        <router-link
          to="/"
        ><img src="@/assets/imgs/prev.svg"></router-link>
        <div class="title">GAME CENTER</div>
      </div>

      <div class="box">
        <div class="border" />
        <img src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1a50de939164e2523f33bfae3041b30&auto=format&fit=crop&w=800&q=60">
        <div class="number-title">
          03
        </div>
        <StripePattern class="stripe-top" />
        <ItalicTitle 
          class="italic-top" 
          text="Today's Top"
        />
      </div>

      <div class="article">
        <div class="article-title">FOOT BALL</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. 
          <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. </p>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2e94705996b10309bc88a058d97cfe&auto=format&fit=crop&w=800&q=60">
    <div class="container">
      <div class="article">
        <div class="article-title style">"WHY FOOT BALL?"</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.  </p>
      </div>
    </div>
    <div class="bottom-img">
      <div class="article-img">
        <div class="square" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1521579971123-1192931a1452?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a1ebcf30e4a7f93ad0a0069759db4a3&auto=format&fit=crop&w=800&q=60"
      >
    </div>
    <ScrolltoTop />
  </div>
</template>

<script>
import ScrolltoTop from '@/components/ScrolltoTop'
import StripePattern from '@/components/StripePattern'
import BoxTitle from '@/components/BoxTitle'
import ItalicTitle from '@/components/ItalicTitle'
export default {
  components: {
    StripePattern,
    BoxTitle,
    ItalicTitle,
    ScrolltoTop
  }
}
</script>

<style lang="scss" scoped>
#products {
  position: relative;

  .container {
    padding: 100px 200px;
  }
  .back {
    display: flex;
    img {
      height: 32px;
      width: 32px;
      background-color: black;
      padding: 9px;
      transition: 0.6s ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
    .title {
      height: 32px;
      margin-left: 12px;
      font-size: 16px;
      padding: 6px 8px;
      background: black;
      color: white;
      text-align: center;
      display: inline-block;
      font-family: 'Open Sans', sans-serif;
    }
    margin-bottom: 100px;
  }
  .box {
    position: relative;
    width: 800px;
    height: 600px;
    .title-top {
      position: absolute;
      top: -40px;
      right: 10px;
    }
    img {
      position: absolute;
      top: 100;
      width: 720px;
      height: 400px;
      object-fit: cover;
      z-index: 99;
    }
    .italic-top {
      position: absolute;
      top: 330px;
      left: 750px;
    }
    .stripe-top {
      width: 600px;
      position: absolute;
      top: -40px;
      left: 20px;
    }
    .border {
      position: absolute;
      top: 340px;
      left: 660px;
      border: 20px solid rgb(255, 218, 116);
      width: 100px;
      height: 100px;
      z-index: 1;
    }
    .number-title {
      position: absolute;
      top: -40px;
      left: 750px;
      z-index: 5;
      font-size: 36px;
      font-family: 'Bungee', cursive;
    }
  }
  .article {
    margin: 0 auto;
    padding: 0 80px;
    .article-title {
      font-size: 40px;
      font-family: 'Bungee', cursive;
    }
    .style {
      font-style: italic;
    }
    p {
      font-family: 'Open Sans', sans-serif;
    }
  }
  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
  .bottom-img {
    position: relative;
    .article-img {
      position: absolute;
      top: -50px;
      left: 50px;
      z-index: 999;
      .square {
        width: 120px;
        height: 120px;
        background: rgb(255, 218, 116);
        z-index: 1;
      }
    }
  }
}
</style>
