<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BaseForm
      lable-width="100px"
      width="350px"
      :model="state"
      inline
    ></BaseForm>
    <BaseTable :columns="columns" :data="tableData"></BaseTable>
  </div>
</template>

<script lang="ts">
import state from "@/store/modules/about/state";
import BaseForm from "@/components/BaseForm.vue";
import BaseTable from "@/components/BaseTable.vue";

export default {
  name: "About",

  components: { BaseForm, BaseTable },

  data: () => ({
    state,
    columns: [
      { label: "日期日期日期日期日期日期", prop: "date" },
      { label: "姓名", prop: "name" },
      { label: "地址", prop: "address" }
    ],
    tableData: [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
}
</style>
