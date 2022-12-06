import merge from 'lodash/merge'
import commonComponents from '../common/components'
import commonTypography from '../common/typography'
import darkComponents from './components'
import darkPalette from './palette'

const dark = {}

merge(dark, darkPalette, commonTypography, commonComponents, darkComponents)

export default dark
