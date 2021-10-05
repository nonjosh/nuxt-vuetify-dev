<template>
  <v-dialog
    ref="dialog"
    v-model="modal2"
    :return-value.sync="inputVal"
    persistent
    width="290px"
  >
    <template #activator="{ on, attrs }">
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
      v-if="modal2"
      v-model="inputVal"
      full-width
      format="24hr"
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(inputVal)">
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>
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
      modal2: false,
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.myTime
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