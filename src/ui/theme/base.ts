import { createTheme } from '@mui/material/styles'
import lightTheme from './light'

const light = createTheme(lightTheme)

const themes = {
  light,
}

export function hasTheme(theme: string) {
  return Object.prototype.hasOwnProperty.call(themes, theme)
}

export function getTheme(theme: keyof typeof themes) {
  return themes[theme]
}
