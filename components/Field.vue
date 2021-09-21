<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <p v-bind:class="{ 'is-invisible': !warn }">Some text</p>
  </div>
</template>

<script>
export default {
  props: { value: String, warn: Boolean },
}
</script>

<style>
.is-invisible {
  color: red;
}
</style>
