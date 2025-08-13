import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),          // Core utilities
    presetIcons(),        // Icon support
    presetAttributify()   // Attribute mode (e.g. flex="~")
  ],
})
