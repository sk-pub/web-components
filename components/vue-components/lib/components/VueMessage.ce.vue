<script setup lang="ts">
import VueButtonCe from './VueButton.ce.vue';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <div class="primary">{{ msg }}</div>
    <VueButtonCe :msg="`Native Vue Button`" />
  </div>
</template>

<style src="./global-styles.css" />

<style scoped>
div {
  font-weight: bold;
}
</style>
