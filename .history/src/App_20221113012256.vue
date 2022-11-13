<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
