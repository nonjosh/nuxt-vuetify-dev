<template>
  <v-menu
    v-model="dateMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="inputVal"
        label="Select Date (HKT)"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="inputVal"
      :allowed-dates="(date) => date <= new Date().toISOString().substr(0, 10)"
      @input="dateMenu = false"
      show-adjacent-months
    ></v-date-picker>
  </v-menu>
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
  data() {
    return {
      dateMenu: false,
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.myDate
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