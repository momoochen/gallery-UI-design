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
        <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=488b21b3046696d05e2488d3113b93ef&auto=format&fit=crop&w=800&q=60">
        <div class="number-title">
          06
        </div>
        <StripePattern class="stripe-top" />
        <ItalicTitle 
          class="italic-top" 
          text="Today's Top"
        />
      </div>

      <div class="article">
        <div class="article-title">BASKETBALL</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. 
          <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. <br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. </p>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1486882430381-e76d701e0a3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5f86b82345e6746522904bf52526cd2&auto=format&fit=crop&w=800&q=60">
    <div class="container">
      <div class="article">
        <div class="article-title style">"WHY BASKETBALL?"</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque architecto ipsam, odio eius ullam culpa commodi cupiditate corporis voluptatum saepe aspernatur, ducimus quae voluptates debitis numquam maxime harum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.<br>
          Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea. Deserunt ducimus quo, quos sapiente architecto nulla? Nulla pariatur adipisci in voluptatum ut totam libero incidunt atque, quas accusamus nostrum facere ea.  </p>
      </div>
    </div>
    <div class="bottom-img">
      <div class="article-img">
        <div class="square" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=11b041ed40accc0146a414d6a3c00e05&auto=format&fit=crop&w=800&q=60"
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
