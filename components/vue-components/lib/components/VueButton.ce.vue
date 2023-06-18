<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  msg: string
}>()


let counter = ref(0);
</script>

<template>
  <div>
    <button class="secondary" @click="counter++">{{ msg }}  {{ counter }}</button>
  </div>
</template>

<style src="./global-styles.css" />
