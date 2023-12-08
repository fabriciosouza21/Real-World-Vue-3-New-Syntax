<template >
  <input v-bind="$attrs" type="radio" :value="value" :checked="modelValue === value"
    @change="$emit('update:modelValue', value)" />
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
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      requered: true
    }
  }
}
</script>
