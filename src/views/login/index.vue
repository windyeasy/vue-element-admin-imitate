<script lang="ts" setup>
defineOptions({
  name: 'Login',
})
const form = reactive({
  username: 'admin',
  password: '111111',
})
</script>

<template>
  <div class="login-container">
    <el-form :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">
          Login Form
        </h3>
      </div>
      <el-form-item props="username">
        <el-input v-model="form.username" size="large">
          <template #prefix>
            <div class="i-custom:user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item props="username">
        <el-input v-model="form.password" size="large">
          <template #prefix>
            <div class="i-custom:password" />
          </template>
        </el-input>
      </el-form-item>
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
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>
