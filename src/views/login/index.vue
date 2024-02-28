<script lang="ts" setup>
import ShowTips from './c-cpns/show-tips.vue'
import type { ILoginForm } from '@/types'

defineOptions({
  name: 'Login',
})
const form = reactive<ILoginForm>({
  username: 'admin',
  password: '111111',
})
</script>

<template>
  <div class="login-container">
    <el-form :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title text-center text-26px text-white">
          Login Form
        </h3>
      </div>
      <el-form-item props="username">
        <el-input v-model="form.username" type="text" size="large" placeholder="Username">
          <template #prefix>
            <div class="i-custom:user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item props="username">
        <el-input v-model="form.password" show-password type="password" placeholder="Password" size="large">
          <template #prefix>
            <div class="i-custom:password" />
          </template>
        </el-input>
      </el-form-item>
      <el-button class="w100%" type="primary">
        Login
      </el-button>
      <ShowTips />
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
   //min-height: 100vh;
  background-color: #2d3a4b;
  height: 100vh;
  overflow: hidden;
}
.login-form {
  .el-input {
    --el-input-bg-color: rgba(0, 0, 0, 0.1) !important;
    --el-input-text-color: #fff;
  }
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

}
</style>
