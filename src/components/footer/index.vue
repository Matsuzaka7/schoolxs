<template>
  <footer>
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
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #222;
  padding: 20px 200px;
}

.contact {
  color: #fff;
  display: flex;
  justify-content: space-around;
  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  > div ul li {
    line-height: 1.5;
    font-size: 15px;
    &:hover {
      color: #fc6271;
      cursor: pointer;
    }
  }
}
</style>
