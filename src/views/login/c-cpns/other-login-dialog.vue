<script lang="ts" setup>
import socialSignin from './social-signin.vue'

interface IProps {
  modelValue: boolean
}
defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])
function updateValue(value: boolean) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="other-login-dialog"
  >
    <el-dialog
      title="Or connect with" :model-value="modelValue"
      @update:model-value="updateValue"
    >
      Can not be simulated on local, so please combine you own business
      simulation! ! !
      <br>
      <br>
      <br>
      <social-signin />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
