<template >
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
  <BaseRadio
  :key="option.value"
  :label="option.label"
  :value="option.value"
  :name="name"
  :modelValue="modelValue"
  @update:modelValue="$emit('update:modelValue', $event)"
  >
  </BaseRadio>
</component>

</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      requerid: true
    },
    name: {
      type: String,
      requerid: true
    },
    modelValue: {
      type: [String, Number],
      requerid: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
