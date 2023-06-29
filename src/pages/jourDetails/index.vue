<template>
  <main class="container">
    <div class="list">
      <div class="list-title">
        <h2>文章</h2>
      </div>
    </div>
    <div class="text-c">
      <h3>江西中医药大学来校调研本科教育教学审核评估</h3>
      <p>
        6月13日下午，江西中医药大学刘潜副校长一行10人来我校调研新一轮本科教育教学审核评估工作。校党委书记汪胜前在会前会见了刘潜一行。副校长陆伟锋出席交流会并致词。
      </p>
      <p>
        陆伟锋对刘潜一行表示欢迎，介绍了学校新一轮本科教育教学审核评估的总体情况。刘潜介绍学校开展新一轮本科教育教学审核评估情况和此次调研目的。教务处负责人结合学校实际，从评估申请、自评自建、线上评估和入校评估等环节分享了学校的经验与做法。双方围绕本科教育教学审核评估自评自建、自评报告撰写、支撑材料准备以及评估组织与保障等方面进行深入交流。
      </p>
      <p>
        团委、教务处、发展规划处、教育评估监测中心相关人员参加座谈。（文/卢成林 图/赖文琴
        责任编辑 潘旭 罗婷）
      </p>
      <div class="text-c-i"><img src="@/assets/images/F.jpg" alt="" /></div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Footer from "@/components/footer/index.vue";
</script>

<style lang="scss" scoped>
.container {
  .list {
    .list-title h2 {
      color: #c7161a;
      font-weight: 500;
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 2px solid #ddd;
    }
  }
  .text-c {
    h3 {
      text-align: center;
      margin: 20px 0;
      font-size: 26px;
    }
    p {
      text-indent: 2em;
      line-height: 1.8;
      font-size: 18px;
    }
    .text-c-i {
      text-align: center;
      margin-top: 5px;
    }
  }
}
</style>
