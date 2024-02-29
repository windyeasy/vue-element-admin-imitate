<script lang="ts" setup>
// import openWindow from '@/utils/open-window'
function wechatHandleClick() {
  // eslint-disable-next-line no-alert
  alert('ok')
}
function tencentHandleClick() {
  // eslint-disable-next-line no-alert
  alert('ok')
}
</script>

<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="wechatHandleClick()">
      <div class="icon-wrap wechat-wrap">
        <div class="i-custom:user" />
      </div>
      WeChat
    </div>
    <div class="sign-btn" @click="tencentHandleClick()">
      <div class="icon-wrap qq-wrap">
        <div class="i-custom:user" />
      </div>
      QQ
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .social-signup-container {
    margin: 20px 0;
    display: flex;
    .sign-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon-wrap {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        border-radius: 4px;
      }
    }
    .wechat-wrap {
      background-color: #24da70;

    }
    .qq-wrap {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>
