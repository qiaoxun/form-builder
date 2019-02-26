<template>
  <div>
    <v-checkbox
      v-model="ex4"
      label="checkbox"
      color="red"
      value="checkbox"
      hide-details >
    </v-checkbox>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
    }
  }
}
</script>
<style>
</style>
