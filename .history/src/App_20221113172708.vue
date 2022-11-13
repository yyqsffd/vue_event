<template>
  <div>
    <el-button type="primary">主要按钮</el-button>

  </div>
</template>

<script>
import { getDataAPI } from '@/api'
export default {
  name: 'app',
  created () {
    this.getDataFn()
  },
  methods: {
    async getDataFn () {
      const res = getDataFn()
    }
  }
}
</script>

<style>

</style>
