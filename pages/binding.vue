<template>
  <v-card>
    <v-card-title> Component two way binding examples</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">lovingVue: {{ lovingVue }}</v-col>
        <v-col cols="12" lg="2"
          ><base-checkbox v-model="lovingVue"></base-checkbox>
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
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      lovingVue: false,
      title: {
        value: '',
        warn: false,
      },
    }
  },
}
</script>

<style>
</style>