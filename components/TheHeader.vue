<template>
  <header class="my-3">
    <div class="container">
      <nav class="text-right">
        <LanguageSwitch/>
      </nav>
    </div>
  </header>
</template>

<script>
import LanguageSwitch from '@/components/LanguageSwitch'

export default {
  components: {
    LanguageSwitch,
  },
}
</script>