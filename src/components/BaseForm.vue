<template>
  <el-form v-bind="$attrs" ref="form">
    <template v-for="(item, index) in $attrs.model" :key="item.prop">
      <el-form-item
        v-bind="item"
        :style="{ minWidth: $attrs.width || 'auto' }"
        :label="item.title"
        :rules="item.validate"
        :prop="`${index}.value`"
      >
        <el-input v-model="item.value" clearable></el-input>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts">
export default {
  name: "BaseForm"
};
</script>
