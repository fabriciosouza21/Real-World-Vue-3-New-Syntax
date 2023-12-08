<template>
  <label v-if="label" >{{ label }}</label>
  <input
    v-bind="$attrs"
    type="text"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:value', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  }

}
</script>
