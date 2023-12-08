<template>
  <input
    type="checkbox"
    v-bind="$attrs"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field" />
  <label>{{ label }}</label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
