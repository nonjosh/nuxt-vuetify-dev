<template>
  <v-time-picker v-model="inputVal" format="24hr" scrollable></v-time-picker>
</template>

<script>
export default {
  model: {
    prop: 'myTime',
    event: 'change',
  },
  props: {
    myTime: String,
  },
  computed: {
    inputVal: {
      get() {
        return this.myTime
      },
      set(val) {
        console.log(val)
        this.$emit('change', val)
      },
    },
  },
}
</script>

<style>
</style>