<template>
  <v-card>
    <v-card-title> Component two way binding examples</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">
          <v-checkbox
            v-model="checkboxValue"
            :label="`checkboxValue: ${checkboxValue.toString()}`"
          ></v-checkbox
        ></v-col>
        <v-col cols="12" lg="2"
          ><vuetify-checkbox v-model="checkboxValue"></vuetify-checkbox>
        </v-col>
        <v-col cols="12" lg="2"
          ><base-checkbox v-model="checkboxValue"></base-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3"
          ><div>PARENT/title: {{ title }}</div>
          <div>
            <v-btn @click="title.warn = !title.warn">
              Change Parent's title.warn
            </v-btn>
          </div></v-col
        >
        <v-col cols="12" lg="2"
          ><field ref="title" v-model="title.value" :warn="title.warn"
        /></v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col cols="12" lg="3">myDate: {{ myDate }}</v-col>
        <v-col cols="12" lg="3"> <my-date-picker v-model="myDate" /></v-col>
        <v-col cols="12" lg="2">
          <my-date-picker-menu v-model="myDate"
        /></v-col>
        <v-col cols="12" lg="2">
          <my-date-picker-dialog v-model="myDate"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3">myTime: {{ myTime }}</v-col>
        <v-col cols="12" lg="3"> <my-time-picker v-model="myTime" /></v-col>
        <v-col cols="12" lg="2">
          <my-time-picker-menu v-model="myTime"
        /></v-col>
        <v-col cols="12" lg="2">
          <my-time-picker-dialog v-model="myTime"
        /></v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col cols="12" lg="3">foo: {{ foo }}</v-col>
        <v-col cols="12" lg="2"> <my-input v-model="foo"></my-input></v-col>
        <v-col cols="12" lg="2">
          <my-input :value="foo" @input="foo = $event"></my-input
        ></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      checkboxValue: false,
      title: {
        value: '',
        warn: false,
      },
      foo: 'bar',
      myDate: '2021-09-11',
      myTime: '17:22',
    }
  },
}
</script>

<style>
</style>