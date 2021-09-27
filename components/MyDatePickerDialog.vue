<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    persistent
    :return-value.sync="inputVal"
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="inputVal"
        label="Select Date (HKT)"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="inputVal" scrollable show-adjacent-months>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(inputVal)">
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
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
      modal: false,
    }
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