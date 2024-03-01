<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import ShowTips from './c-cpns/show-tips.vue'
import { validUsername } from './utils/validates.ts'

import type { ILoginForm } from '@/types'
import useLoginStore from '@/store/login'

defineOptions({
  name: 'Login',
})

// 登录表单相关方法
const formEl = ref<FormInstance>()
const form = reactive<ILoginForm>({
  username: 'admin',
  password: '111111',
})
const rules = reactive<FormRules<ILoginForm>>({
  username: [
    {
      required: true,
      validator: (_, value, callback) => {
        if (!(validUsername(value)))
          callback(new Error('Please enter the correct user name'))
        else
          callback()
      },
      trigger: 'blur',
    },

  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'blur',
    },
    {
      min: 6,
      message: 'The password can not be less than 6 digits',
      trigger: 'blur',
    },
  ],
})
const loginStore = useLoginStore()
// 处理登录点击
// 登录loading效果
const isLoading = ref(false)
const router = useRouter()
async function submitLogin() {
  if (!formEl)
    return
  isLoading.value = true
  await formEl!.value!.validate(async (valid) => {
    if (valid) {
      isLoading.value = false
      loginStore.loginAction(form).then(() => {
        isLoading.value = false
       
        // 跳转到首页
        router.push('/layout')
      }).catch((error) => {
        console.warn(error)
        isLoading.value = false
      })
    }

    else { isLoading.value = false }
  })
}
</script>

<template>
  <div class="login-container">
    <el-form ref="formEl" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3 class="title text-center text-26px text-white">
          Login Form
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="form.username" type="text" size="large" placeholder="Username">
          <template #prefix>
            <div class="i-custom:user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" show-password type="password" placeholder="Password" size="large">
          <template #prefix>
            <div class="i-custom:password" />
          </template>
        </el-input>
      </el-form-item>
      <el-button class="w100%" type="primary" :loading="isLoading" @click="submitLogin">
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
    --login-input-border-color: rgba(255, 255, 255, .1);
    --el-input-bg-color: rgba(0, 0, 0, 0.1) !important;
    --el-input-text-color: #fff;
    --el-border-color-hover: rgba(255, 255, 255, .1);
    --el-input-focus-border-color: var( --login-input-border-color);
    --el-border-color: var( --login-input-border-color);
  }
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

}
</style>
