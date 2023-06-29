<template>
  <header class="header">
    <div class="top">
      <RouterLink to="/index" class="identification">
        <img
          src="https://img1.baidu.com/it/u=3187554906,3237026223&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
          alt=""
          class="identification-img"
        />
        <div class="identification-details">
          <h1>砂糖大学</h1>
          <h2>Welcome to the Public Security Bureau</h2>
        </div>
      </RouterLink>
      <div class="header-right">
        <h2>学以致用、牢底坐穿</h2>
      </div>
    </div>
    <div class="menu">
      <ul class="menu-ul">
        <li><RouterLink to="/index">首页</RouterLink></li>
        <li><RouterLink to="/jour">学校新闻</RouterLink></li>
        <!-- <li><RouterLink to="/facility">学校设施</RouterLink></li> -->
        <li><RouterLink to="/forum">学校论坛</RouterLink></li>
        <li><RouterLink to="/about">关于我们</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  min-height: 180px;
  color: #eee;
  background-color: #076fc4f0;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 5px 2px #33333330;
  /* 头部标识 */
  .top {
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeeea0;
    .identification {
      display: flex;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .identification-details {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-family: cursive;
        letter-spacing: 2px;
        h2 {
          font-weight: 500;
          font-size: 20px;
        }
      }
    }
    .header-right h2 {
      font-family: cursive;
      font-size: 28px;
      font-weight: 700;
    }
  }
  /* 头部下方区域 */
  .menu {
    display: flex;
    ul {
      font-weight: bold;
      font-size: 18px;
    }
    /* 头部下方左侧的目录 */
    .menu-ul {
      display: flex;
      flex: 4;
      max-width: 900px;
      justify-content: space-around;
      li {
        padding: 10px;
        &:hover {
          animation: bottomBorder 1s;
        }
      }
    }
  }
}

.header > div {
  margin: 0 250px 12px;
}

/* 下边框动画 */
@keyframes bottomBorder {
  0% {
    opacity: 0;
    border-bottom: 2px solid #ccc;
  }
  100% {
    opacity: 1;
    border-bottom: 2px solid #fff;
  }
}
</style>
