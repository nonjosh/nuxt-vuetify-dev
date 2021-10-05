<template>
  <v-date-picker
    v-model="inputVal"
    show-adjacent-months
    :allowed-dates="(date) => date <= new Date().toISOString().substr(0, 10)"
  ></v-date-picker>
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