import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import fr from './locales/fr.js'

export default createI18n({
  locale: 'en',
  messages: { en, fr }
})
