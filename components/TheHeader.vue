<template>
  <header class="m-4">
    <nav class="d-flex justify-content-between">
      <a :href="$t('TheHeader.sngURL')">
        <SNGLogo/>
      </a>
      <LanguageSwitch/>
    </nav>
  </header>
</template>

<script>
import LanguageSwitch from '@/components/LanguageSwitch'
import SNGLogo from '@/components/SNGLogo'

export default {
  components: {
    LanguageSwitch, SNGLogo,
  },
}
</script>