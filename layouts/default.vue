<template>
  <div>
    <TheHeader/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<style>
</style>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>