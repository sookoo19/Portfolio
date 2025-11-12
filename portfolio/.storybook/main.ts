import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: path.resolve(__dirname, '..', 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, '..', 'node_modules', 'react-dom'),
    }
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
    ]
    return config
  },
}
export default config
