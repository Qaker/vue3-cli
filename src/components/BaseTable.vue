<template>
  <el-table
    v-bind="$attrs"
    ref="table"
    header-row-class-name="header-row"
    header-cell-class-name="header-cell"
    row-class-name="table-row"
    cell-class-name="table-cell"
  >
    <template v-for="column in $attrs.columns" :key="column.label">
      <el-table-column v-bind="column" show-overflow-tooltip>
        <template #header>
          <el-tooltip placement="top-start">
            <template #content> {{ column.label }} </template>
            <div v-tooltip class="tooltip">{{ column.label }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { DirectiveBinding } from "vue";

export default {
  name: "BaseTable",

  directives: {
    tooltip: (el: HTMLElement, binding: DirectiveBinding<unknown>) => {
      console.log(el, binding);
    }
  }
};
</script>

<style lang="scss" scoped>
.base-table {
  .tooltip {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
