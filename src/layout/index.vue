<script lang="ts" setup></script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    height: 100vh;
    .el-container {
      width: 100%;
      height: 100%;
    }
  }
  .el-aside {
    background-color: black;
  }
  .el-header {
    background-color: yellow;
  }
</style>
