import { defineStore } from "pinia";
import type { state } from '@/types/store'

export default defineStore({
  id: "global",
  state: () => {
    return {
      jourData: [
        {
          name: "学校要闻",
          url: "yaowen",
          list: [
            {
              id: 1,
              text: "江西中医药大学来校调研本科教育教学审核评估",
              time: "2023-06-13",
            },
            {
              id: 2,
              text: "省委办公厅（省档案局）来校调研指导",
              time: "2023-06-13",
            },
            {
              id: 3,
              text: "我校召开2023年毕业季学生安全稳定工作会议",
              time: "2023-06-13",
            },
            {
              id: 4,
              text: "学校持续推进学习贯彻习近平新时代中国特色社会主义思想主题教育",
              time: "2023-06-12",
            },
          ],
        },
        {
          name: "媒体",
          url: "meiti",
          list: [
            {
              id: 1,
              text: "【学习强国】把理论学习贯穿主题教育全过程",
              time: "2023-05-04",
            },
            {
              id: 2,
              text: "【经济日报】江西以调查研究推动主题教育",
              time: "2023-05-01",
            },
          ],
        },
        {
          name: "校园传真",
          url: "chuanzhen",
          list: [
            {
              id: 1,
              text: "上饶师范学院党委宣传部来校调研交流",
              time: "2023-06-15",
            },
            {
              id: 2,
              text: "土木与建筑工程学院赴靖安红色教育基地开展学习贯彻习近平新时代中国特色社会主义思想主题教育党日活动",
              time: '2023-06-12'
            },
          ],
        },
      ]
    }
  },
  getters: {
    getMeiti: state => state.jourData.find(item => item.name === '媒体'),
    getYaowen:  state => state.jourData.find(item => item.name === '学校要闻'),
    getChuanzhen:  state => state.jourData.find(item => item.name === '校园传真'),
  },
  actions: {
    
  },
} as state);
