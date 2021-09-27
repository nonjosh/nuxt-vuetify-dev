<template>
  <v-date-picker v-model="inputVal" show-adjacent-months></v-date-picker>
</template>

<script>
export default {
  model: {
    prop: 'myDate',
    event: 'change',
  },
  props: {
    myDate: String,
  },
  computed: {
    inputVal: {
      get() {
        return this.myDate
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