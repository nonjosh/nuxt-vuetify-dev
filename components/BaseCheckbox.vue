<template>
  <div>
    <input
      type="checkbox"
      :checked="checked"
      id="mycheckbox"
      @change="$emit('change', $event.target.checked)"
    />
    <label for="mycheckbox">checkbox in component</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
}
</script>

<style>
</style>
