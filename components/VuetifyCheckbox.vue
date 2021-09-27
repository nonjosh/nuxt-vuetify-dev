<template>
  <v-checkbox
    v-model="inputVal"
    label="checkbox in component"
  ></v-checkbox>
</template>

<script>
export default {
  model: {
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  computed: {
    inputVal: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('change', val)
      },
    },
  },
}
</script>

<style>
</style>