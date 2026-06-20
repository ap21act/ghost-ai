import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        'bg': {
          'base': 'var(--bg-base)',
          'surface': 'var(--bg-surface)',
          'elevated': 'var(--bg-elevated)',
          'subtle': 'var(--bg-subtle)',
        },
        'border': {
          'default': 'var(--border-default)',
          'subtle': 'var(--border-subtle)',
        },
        'text': {
          'primary': 'var(--text-primary)',
          'secondary': 'var(--text-secondary)',
          'muted': 'var(--text-muted)',
          'faint': 'var(--text-faint)',
        },
        'accent': {
          'primary': 'var(--accent-primary)',
          'primary-dim': 'var(--accent-primary-dim)',
          'ai': 'var(--accent-ai)',
          'ai-text': 'var(--accent-ai-text)',
        },
        'state': {
          'error': 'var(--state-error)',
          'success': 'var(--state-success)',
          'warning': 'var(--state-warning)',
        },
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
