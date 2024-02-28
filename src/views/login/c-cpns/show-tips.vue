<script lang="ts" setup></script>

<template>
  <div class="show-tips flex justify-between text-white mt20px text-[14px]">
    <div class="tips-left items-center w56%">
      <div class="left-item">
        <div class="item-left">
          Username: admin
        </div>
        <div class="item-right">
          Password: any
        </div>
      </div>
      <div class="left-item">
        <div class="item-left">
          Username: editor
        </div>
        <div class="item-right">
          Password: any
        </div>
      </div>
    </div>
    <div class="tips-right">
      <el-button type="primary">
        Or connect with
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left-item {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
