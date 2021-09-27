<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="inputVal"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="inputVal"
        label="Select Time (HKT)"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu2"
      v-model="inputVal"
      full-width
      format="24hr"
      scrollable
      @click:minute="$refs.menu.save(inputVal)"
    ></v-time-picker>
  </v-menu>
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
  data() {
    return {
      menu2: false,
    }
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