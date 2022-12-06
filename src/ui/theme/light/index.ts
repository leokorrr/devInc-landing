import merge from 'lodash/merge'
import commonComponents from '../common/components'
import commonTypography from '../common/typography'
import commonBreakpoints from '../common/breakpoints'
import lightComponents from './components'
import lightPalette from './palette'

const light = {}

merge(light, lightPalette, commonTypography, commonBreakpoints, commonComponents, lightComponents)

export default light
