<template>
  <!-- 论坛 -->
  <main class="container">
    <div class="forum">
      <div class="left">
        <div class="count">
          <div class="fcount">
            <span>200</span>
            <div>帖子</div>
          </div>
          <div class="ccount">
            <span>10</span>
            <div>成员</div>
          </div>
        </div>
        <div class="announce">
          <h3>公告</h3>
          <p>
            价值观在里面运作，只有自己那一个单一的场，自己定的价值观，自己定的人生观，没有什么内在的对冲，所以造成了小混混吹牛那是很单纯的吹，很合一的吹，他们从来不会害怕有一天牛在天上掉下来把他砸死。
          </p>
        </div>
      </div>
      <div class="center">
        <div class="center-title">
          <span>帖子</span>
          <div>
            <button>发布</button>
          </div>
        </div>
        <div class="center-content">
          <div class="content-item" v-for="item in 6" :key="item">
            <h2>在大学里,当着很多人吹牛是种什么样的感觉?</h2>
            <div class="content-desc">
              <div class="username">发布者：张三</div>
              <div class="pice">|</div>
              <div class="timer">2024-07-05</div>
              <div class="pice">|</div>
              <div class="timer">100阅读</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-title">今天大家都在讨论的话题</div>
        <ol>
          <li v-for="item in 7" :key="item">java最终归宿是保安吗</li>
          <li>疑似肯德基的广告文案登上热搜，该广告内容为“大叔，你是不是在偷拍我”</li>
        </ol>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Footer from "@/components/footer/index.vue";
</script>

<style lang="scss" scoped>
.container {
  .forum {
    display: flex;
    height: 600px;

    .left {
      flex: 1;
      background-color: #eee;
      margin-right: 30px;
      > div {
        margin: 25px;
      }
      .count {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid #aaa;

        .fcount,
        .ccount {
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 18px;
          }
          div {
            font-size: 12px;
            color: #666;
          }
        }
      }

      .announce {
        h3 {
          font-size: 15px;
          margin-bottom: 5px;
        }
        p {
          font-size: 12px;
          line-height: 2;
          font-size: #666;
        }
      }
    }
    /* 中间板块 */
    .center {
      flex: 4;
      background-color: #eee;
      margin-right: 30px;
      padding: 20px;

      .center-title {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #aaa;
        > span {
          font-size: 18px;
        }
        > div > button {
          cursor: pointer;
          padding: 9px 26px;
          color: #eee;
          background-color: #049d74;
          border: 1px solid #aaaaaac0;
          border-radius: 3px;
          transition: all 0.5s;
          &:hover {
            filter: brightness(1.1);
          }
        }
      }
      .center-content {
        .content-item {
          padding: 15px;
          h2 {
            color: #333;
            font-size: 18px;
          }

          .content-desc {
            display: flex;
            margin-top: 5px;
            font-size: 12px;
            .pice {
              padding: 0 10px;
            }
            .timer {
              color: #666;
            }
          }
        }
      }
    }
    .right {
      flex: 2;
      background-color: #eee;
      padding: 15px;

      .right-title {
        font-weight: 100;
        font-size: 16px;
        margin-bottom: 12px;
      }
      ol li {
        color: #333;
        cursor: pointer;
        position: relative;
        margin-left: 25px;
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 15px;
        transition: all 0.3s;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -18px;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background-color: #aaa;
          border-radius: 50%;
        }
        &:hover {
          color: #1677c7;
        }
      }
    }
  }
}
</style>
