<template>
  <div class="about-container">
    <div class="about">
      <div class="bg">砂糖大学</div>
      <div class="about-text">
        <h2>关于我们</h2>
        <div>
          <p>
            [砂糖大学]<span class="red">成立于1990年</span
            >，我们的团队由一群热爱教育、拥有丰富教学经验的老师组成。我们致力于为学生提供优质、个性化的教学，帮助他们在学习中获得成功。
          </p>
          <p>
            我们的课程涵盖了各个学科领域，采用独特的教学方法，结合最新的教育理念，为学生提供全面、系统的学习体验。我们不仅注重学生的知识掌握，更注重培养他们的思维能力和创造力。
          </p>
          <p>
            自成立以来，砂糖大学已经帮助了<span class="red">数千名学生</span
            >实现了他们的学习目标，并获得了广泛好评。我们将继续努力，为更多的学生提供优质的教育。
          </p>
          <p>
            我们深知每个学生都是独一无二的，因此我们采用了独特的教学方法，结合最新的教育理念，关注每位同学的学习状态。我们不仅注重学生的知识掌握，更注重培养他们的思维能力和创造力。
          </p>
          <p>
            我们始终坚持以学生为中心，不断创新，为学生提供最优质的教育服务。我们相信，通过我们的努力，每个学生都能在学习中获得成功。
          </p>
        </div>
        <div class="contact">
          <div>
            <h3>联系我们</h3>
            <ul>
              <li>反馈：0738-xxxxxxx</li>
              <li>咨询：13800000000</li>
              <li>举报：13811111111</li>
            </ul>
          </div>
          <div>
            <h3>资源下载</h3>
            <ul>
              <li>课件下载</li>
              <li>资料下载</li>
              <li>文档下载</li>
              <li>工具下载</li>
            </ul>
          </div>
          <div>
            <h3>商业合作</h3>
            <ul>
              <li>广告合作</li>
              <li>课程合作</li>
            </ul>
          </div>
          <div>
            <h3>砂糖大学交流群</h3>
            <ul>
              <li>QQ群1：1234567</li>
              <li>QQ群2：1234568</li>
              <li>QQ群3：1234569</li>
              <li>QQ群4：1234570</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.red {
  color: #fc6271;
}
.about-container {
  padding: 0 8%;
  /* 100vh - 顶栏高度 */
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;


  .about {
    position: relative;
    width: 80%;
    height: 80%;
    padding: 30px;
    z-index: 5;
    box-shadow: 0 0 5px -3px #333;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    &::after {
      position: absolute;
      top: 20px;
      left: 20px;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #a7d8bb;
      z-index: -10;
    }

    .bg {
      font-family: cursive;
      font-weight: 700;
      color: #ddd;
      position: absolute;
      top: 50px;
      left: 70px;
      font-size: 90px;
      width: 0;
      z-index: 1;
      user-select: none;
    }

    .about-text {
      position: relative;
      z-index: 2;
      p {
        font-size: 20px;
        color: #222;
        text-indent: 2em;
        line-height: 1.5;
        margin-top: 10px;
        font-weight: 300;
      }

      .contact {
        margin-top: 60px;
        display: flex;
        justify-content: space-around;
        h3 {
          font-weight: 600;
          margin-bottom: 10px;
        }
        > div ul li {
          color: #333;
          line-height: 1.5;
          font-size: 15px;
          &:hover {
            color: #fc6271;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
