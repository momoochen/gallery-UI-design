<template>
  <div id="home">
    <div id="background" />
    <div id="wrapper">
      <div class="top">
        <div class="title">GAME CENTER</div>
        <h2>TOP GAMES</h2>
      </div>
      <div class="container">
        <router-link 
          class="box" 
          to="/page1"
        >
          <BoxTitle
            class="top"
            text="GAMEBOY"
          />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1521701527758-6c92679a4934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5fe8f7cec78863d537c6c178aa403c7&auto=format&fit=crop&w=900&q=60">
          <div class="number-title">
            01
          </div>
          <StripePattern />
          <ItalicTitle 
            class="italic" 
            text="Today's Top"
          />
        </router-link>

        <router-link 
          class="box1" 
          to="/page2"
        >
          <BoxTitle
            class="title-top"
            text="TENNIS"
          />
          <StripePattern class="stripe-top" />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db0c3127400915052a9e1a9d1e5ae84c&auto=format&fit=crop&w=3166&q=80">
          <div class="number-title">
            02
          </div>
          <ItalicTitle 
            class="italic-top" 
            text="Today's Top"
          />
          <div class="square" />
        </router-link>
          
        <router-link 
          class="box1" 
          to="/page3"
        >
          <BoxTitle 
            class="title-top" 
            text="FOOTBALL"
          />
          <StripePattern class="stripe-top" />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1a50de939164e2523f33bfae3041b30&auto=format&fit=crop&w=800&q=60">
          <div class="number-title">
            03
          </div>
          <ItalicTitle 
            class="italic-top" 
            text="Today's Top"
          />
          <div class="square" />
        </router-link>

        <router-link 
          class="box" 
          to="/page4"
        >
          <BoxTitle
            class="top"
            text="LEGO"
          />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-0.3.5&s=f0215ff8ef4a3e6348b8ec480b8212c0&auto=format&fit=crop&w=1349&q=80">
          <div class="number-title">
            04
          </div>
          <StripePattern />
          <ItalicTitle 
            class="italic" 
            text="Today's Top"
          />
        </router-link>

        <router-link 
          class="box" 
          to="/page5"
        >
          <BoxTitle
            class="top"
            text="PS4"
          />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-0.3.5&s=24fe261e9be0815f553a92e6668f6e13&auto=format&fit=crop&w=1350&q=80">
          <div class="number-title">
            05
          </div>
          <StripePattern />
          <ItalicTitle 
            class="italic" 
            text="Today's Top"
          />
        </router-link>

        <router-link 
          class="box1" 
          to="/page6"
        >
          <BoxTitle 
            class="title-top" 
            text="BASKETBALL"
          />
          <StripePattern class="stripe-top" />
          <div class="border" />
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=488b21b3046696d05e2488d3113b93ef&auto=format&fit=crop&w=800&q=60">
          <div class="number-title">
            06
          </div>
          <ItalicTitle 
            class="italic-top" 
            text="Today's Top"
          />
          <div class="square" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StripePattern from '@/components/StripePattern'
import BoxTitle from '@/components/BoxTitle'
import ItalicTitle from '@/components/ItalicTitle'
export default {
  components: {
    StripePattern,
    BoxTitle,
    ItalicTitle
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
#home {
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  #background {
    position: absolute;
    background-color: rgba(223, 223, 223, 0.356);
    width: 60%;
    height: 1920px;
    top: 0;
    left: 20%;
    z-index: 1;
    transform: rotate(60deg);
  }

  #wrapper {
    padding: 50px;
    margin: 0 auto;
  }
  .top {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 16px;
      padding: 6px 8px;
      background: black;
      color: white;
      text-align: center;
      display: flex;
      margin: 0 auto;
    }
    h2 {
      font-size: 48px;
      margin: 12px auto;
      text-align: center;
    }
  }

  .container {
    margin: 100px auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 50px;
    justify-items: center;
    .box {
      position: relative;
      font-family: 'Bungee', cursive;
      height: 550px;
      width: 450px;
      cursor: pointer;
      .top {
        position: absolute;
        top: 20px;
        z-index: 999;
        left: 10px;
      }
      img {
        position: absolute;
        top: 30px;
        left: 0px;
        width: 400px;
        height: 400px;
        object-fit: cover;
        z-index: 4;
        transition: 0.3s ease-in-out;
      }
      .border {
        position: absolute;
        top: 0;
        left: 190px;
        border: 20px solid rgb(255, 218, 116);
        width: 240px;
        height: 200px;
        z-index: 1;
        transition: 0.2s ease-in-out;
      }

      .italic {
        top: 420px;
        left: 379px;
      }
      .number-title {
        position: absolute;
        top: 433px;
        left: 0;
        z-index: 5;
        font-size: 36px;
      }
      &:hover {
        .border {
          transform: translateX(-10px);
          transform: translateY(-10px);
          border: 20px solid black;
        }
        img {
          transform: scale(0.96);
        }
        .pattern {
          width: 300px;
          background-image: repeating-linear-gradient(
            45deg,
            rgb(0, 0, 0),
            rgb(0, 0, 0) 15px,
            rgba(255, 255, 255, 0) 15px,
            rgba(255, 255, 255, 0) 30px
          );
        }
      }
    }
    .box1 {
      position: relative;
      height: 550px;
      width: 450px;
      cursor: pointer;
      &:hover {
        .border {
          transform: scale(1.02);
          border: 20px solid black;
        }
        img {
          transform: scale(0.96);
        }
      }
      img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        position: absolute;
        z-index: 3;
        top: 30px;
        left: 30px;
        transition: 0.3s ease-in-out;
      }
      .title-top {
        position: absolute;
        top: 366px;
        z-index: 999;
        left: 30px;
      }
      .stripe-top {
        top: 90px;
        left: 90px;
        width: 300px;
        height: 200px;
        z-index: 1;
      }
      .square {
        position: absolute;
        top: 60px;
        left: 60px;
        width: 300px;
        height: 200px;
        background: rgb(255, 218, 116);
        z-index: 1;
      }
      .italic-top {
        top: 300px;
        left: 320px;
      }
      .number-title {
        font-family: 'Bungee', cursive;
        position: absolute;
        top: 433px;
        left: 0;
        z-index: 999;
        font-size: 36px;
      }
      .border {
        position: absolute;
        top: 0;
        left: 0;
        border: 20px solid rgb(255, 218, 116);
        width: 430px;
        height: 430px;
        z-index: 5;
        transition: 0.3s ease-in-out;
      }
    }
  }
}
.animated {
  animation-duration: 0.6s;
}
</style>
