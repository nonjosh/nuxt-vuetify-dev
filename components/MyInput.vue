<template>
  <div>
    My Input:
    <input v-model="inputVal" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style>
</style>