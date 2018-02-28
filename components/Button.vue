<template>
  <a class="btn btn-primary" :href="url" :target="newTab ? '_blank' : null" role="button">{{text}}</a>
</template>

<script>
  export default {
    props: ['text', 'url', 'newTab']
  }
</script>

<style scoped>
  .btn {
    border-radius: 0;
  }
</style>