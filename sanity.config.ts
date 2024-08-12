import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {iconPicker} from 'sanity-plugin-icon-picker';
import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '8ylc0gmg',
  dataset: 'production',

  plugins: [inlineSvgInput(), iconPicker(), structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

