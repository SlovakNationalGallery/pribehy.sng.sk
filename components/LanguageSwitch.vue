<template>
  <div class="languageGroup">
    <span v-if="$i18n.locale === 'sk'" class="active">
      SK
    </span>
    <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none">
      SK
    </nuxt-link>

    <span v-if="$i18n.locale === 'en'" class="active">
      EN
    </span>
    <nuxt-link v-else :to="`/en` + $route.fullPath" active-class="none">
      EN
    </nuxt-link>
  </div>
</template>

<style scoped>
  .languageGroup > * {
    display: inline-block;
    width: 1.75rem;
    text-align: center;
  }
  a {
    color: black;
    font-weight: 300;
  }
  a:hover {
    text-decoration: none;
    font-weight: 700;
  }
  .active {
    font-weight: 700;
  }
</style>