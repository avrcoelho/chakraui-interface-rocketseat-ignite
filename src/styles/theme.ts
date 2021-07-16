import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    dark: {
      'text': '#47585B',
      'info': '#999999',
    },
    light: {
      'text': '#F5F8FA',
      'info': '#DADADA'
    },
    yellow: '#FFBA08'
  },
  styles: {
    global: {
      ':root': {
        '--swiper-theme-color': 'var(--chakra-colors-yellow)',
        '--swiper-navigation-size': '1.875rem'
      },
      body: {
        bg: 'light.text',
        color: 'dark.text'
      },
      '.swiper-button-next': {
        right: '8'
      },
      '.swiper-button-prev': {
        left: '8'
      },
      '.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)': {
        opacity: 1,
        background: 'dark.info'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
})