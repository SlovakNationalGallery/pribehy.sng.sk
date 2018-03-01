export const state = () => ({
  locales: ['sk', 'en'],
  locale: 'sk'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}