<template>
  <div>
    <el-button type="primary">主要按钮</el-button>

  </div>
</template>

<script>
// import { getListAPI } from '@/api'
export default {
  name: 'app',
  created () {
    this.getListFn()
  },
  methods: {
    getListFn () {
      // const res = getListAPI()
      // console.log(res)
    }
  }
}
</script>

<style>

</style>
