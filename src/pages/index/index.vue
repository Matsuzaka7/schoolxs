<template>
  <!-- 最新学校要闻 -->
  <div class="container">
    <div class="content-container">
      <div class="plate-title">
        <h2>学校要闻</h2>
        <RouterLink to="/list?q=yaowen" style="color: #3366dd">查看更多</RouterLink>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="card big-left">
            <RouterLink to="/jourDetails">
              <div class="images-box"><img src="@/assets/images/0.png" alt="" /></div>
              <div class="content-desc">
                <h3>刘祖文参加沪赣教育合作座谈交流会并开展调研交流</h3>
                <div style="text-indent: 2em">
                  6月14日上午，沪赣教育合作座谈交流会在上海举行。省委常委梁桂出席并讲话。期间，省委教育工委书记、省教育厅厅长吴永明，校党委副书记、校长刘祖文参加沪赣教育合作座谈交流会，并分别率队赴上海大学和南京水利科学研究院开展调研交流。
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="content-right">
          <div class="card">
            <RouterLink to="/jourDetails">
              <div class="images-box img-content">
                <img src="@/assets/images/a.jpg" alt="" />
                <h3>江西中医药大学来校调研本科教育教学审核评估</h3>
              </div>
            </RouterLink>
          </div>
          <div class="card">
            <RouterLink to="/jourDetails">
              <div class="images-box img-content">
                <img src="@/assets/images/b.jpg" alt="" />
                <h3>省委办公厅（省档案局）来校调研指导</h3>
              </div>
            </RouterLink>
          </div>
          <div class="card">
            <RouterLink to="/jourDetails">
              <div class="images-box img-content">
                <img src="@/assets/images/c.jpg" alt="" />
                <h3>我校召开2023年毕业季学生安全稳定工作会议</h3>
              </div>
            </RouterLink>
          </div>
          <div class="card">
            <RouterLink to="/jourDetails">
              <div class="images-box img-content">
                <img src="@/assets/images/d.jpg" alt="" />
                <h3>学校持续推进学习贯彻习近平新时代中国特色社会主义思想</h3>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="annunciate-container">
      <div class="plate-title">
        <h2>通知通告</h2>
        <a href="" style="color: #3366dd">查看更多</a>
      </div>
      <div class="content">
        <div class="announcement-card" v-for="item in 8" :key="item">
          <div class="announcement-time">2024-06-15</div>
          <div class="announcement-c">
            <h2>关于2024-2025年第一学期选修课第二轮选课通知</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
/**标题栏 */
.plate-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 15px 0;
  h2 {
    font-size: 28px;
  }
}

// 卡片
.card {
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 6px 3px #33333333;

  .img-content {
    position: relative;
    h3 {
      /* 穿透 */
      pointer-events: none;
      color: #eee;
      width: 100%;
      padding: 15px;
      text-align: center;
      position: absolute;
      bottom: 0;
      /* 阴影 */
      background: linear-gradient(to top, #000, transparent);
    }
  }
}
// 学校要闻
.content-container {
  .content {
    display: flex;
    .images-box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
        object-fit: cover;
        &:hover {
          transform: scale(1.2);
        }
      }
    }

    /* 学校要闻 */
    .content-left {
      flex: 5;
      margin-right: 30px;
      .big-left {
        display: flex;
        flex-direction: column;
        a {
          color: #333;
        }
        .content-desc {
          padding: 20px;
          h3 {
            color: #333;
            transition: all 0.2s;
            &:hover {
              color: #076fc4;
            }
          }
          div {
            font-size: 14px;
            margin-top: 6px;
          }
        }
      }
    }
    .content-right {
      flex: 5;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      > .card {
        width: calc(50% - 20px);
        margin-right: 20px;
        margin-bottom: 30px;

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* 学校通告 */
.annunciate-container {
  margin-top: 50px;
  .content {
    display: flex;
    flex-wrap: wrap;

    .announcement-card {
      --color: #111;
      width: calc(25% - 10px);
      height: 160px;
      padding: 18px;
      color: #222;
      background-color: #f4f4f4;
      transition: all 0.6s;
      margin-right: 10px;
      margin-bottom: 10px;
      &:hover {
        --color: #eee;
        background-color: #666;
      }
      .announcement-time {
        font-size: 14px;
        color: var(--color);
      }
      h2 {
        color: var(--color);
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }
}
</style>
