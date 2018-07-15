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
        <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-0.3.5&s=24fe261e9be0815f553a92e6668f6e13&auto=format&fit=crop&w=800&q=60">
        <div class="number-title">
          05
        </div>
        <StripePattern class="stripe-top" />
        <ItalicTitle 
          class="italic-top" 
          text="Today's Top"
        />
      </div>

      <div class="article">
        <div class="article-title">PS4</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. 
          <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. </p>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b69ccb54b9605ead6a49c6da0cbb007f&auto=format&fit=crop&w=800&q=60">
    <div class="container">
      <div class="article">
        <div class="article-title style">"WHY PS4?"</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.  </p>
      </div>
    </div>
    <div class="bottom-img">
      <div class="article-img">
        <div class="square" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2e8843e67935b873f32154438cf9664&auto=format&fit=crop&w=800&q=60"
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
