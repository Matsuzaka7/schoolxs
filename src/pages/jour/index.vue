<template>
  <!-- 新闻 -->
  <main class="container">
    <!-- 学校要闻 -->
    <div class="story">
      <div class="plate-title">
        <h2>
          <div class="box"></div>
          学校要闻
        </h2>
        <RouterLink to="/list?q=yaowen" style="color: #3366dd">查看更多</RouterLink>
      </div>
      <div class="story-content">
        <div class="story-content-left">
          <div class="img-content">
            <img
              src="@/assets/images/0.png"
              alt="刘祖文参加沪赣教育合作座谈交流会并开展调研交流"
            />
            <h3>刘祖文参加沪赣教育合作座谈交流会并开展调研交流</h3>
          </div>
        </div>
        <div class="story-content-right">
          <ul>
            <li v-for="item in store.getYaowen.list" :key="item.id">
              <RouterLink :to="`jourDetails?q=${store.getYaowen.url}&id=${item.id}`">
                <div>{{ item.text }}</div>
                <span>{{ item.time }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 媒体&校园传真 -->
    <div class="media">
      <!-- 媒体 -->
      <div class="media-box">
        <div class="plate-title">
          <h2>
            <div class="box"></div>
            媒体
          </h2>
          <RouterLink to="list?q=meiti" style="color: #3366dd">查看更多</RouterLink>
        </div>
        <ul>
          <li v-for="item in store.getMeiti.list" :key="item.id">
            <RouterLink :to="`jourDetails?q=${store.getMeiti.url}&id=${item.id}`">
              <div>{{ item.text }}</div>
              <span>{{ item.time }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <!-- 校园传真 -->
      <div class="fax-box">
        <div class="plate-title">
          <h2>
            <div class="box"></div>
            校园传真
          </h2>
          <RouterLink to="/list?q=chuanzhen" style="color: #3366dd">查看更多</RouterLink>
        </div>
        <ul>
          <li v-for="item in store.getChuanzhen.list" :key="item.id">
            <RouterLink :to="`jourDetails?q=${store.getChuanzhen.url}&id=${item.id}`">
              <div>{{ item.text }}</div>
              <span>{{ item.time }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import store from "@/utils/store";
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}

.plate-title {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 15px 0;
  &::before {
    position: absolute;
    top: 8px;
    left: -20px;
    content: "";
    width: 7px;
    height: 60%;
    background-color: #1677c7;
  }
}

.container {
  .story {
    /* 要闻内容 */
    .story-content {
      display: flex;
      height: 420px;
      margin-bottom: 40px;

      .story-content-left {
        flex: 1;
        margin-right: 30px;
        .img-content {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          h3 {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: #eee;
            background-color: #000000a0;
            text-align: center;
          }
        }
      }

      /* 新闻右侧 */
      .story-content-right {
        flex: 1;
        width: 50%;
        ul li a {
          color: #333;
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          padding: 10px 5px;
          transition: all 0.2s;
          &:hover {
            color: #007de3;
          }
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  /* 媒体&校园传真 */
  .media {
    display: flex;
    margin-bottom: 20px;

    .media-box {
      flex: 1;
      margin-right: 80px;
    }
    .fax-box {
      flex: 1;
      width: 0;
    }
    ul li a {
      color: #333;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 15px 5px;
      border-bottom: 1px solid #e3e3e3;
      transition: all 0.2s;
      &:hover {
        color: #007de3;
      }
      &:hover::before {
        width: 100%;
      }
      &::before {
        position: absolute;
        content: "";
        width: 0px;
        height: 1px;
        background: #007de3;
        left: 0;
        bottom: -1px;
        transition: all 0.8s ease-in-out;
      }
    }
  }
}

.story-content-right ul li a > div,
.media ul li a > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 75%;
}
</style>
