import merge from 'lodash/merge'
import commonComponents from '../common/components'
import commonTypography from '../common/typography'
import lightComponents from './components'
import lightPalette from './palette'

const light = {}

merge(light, lightPalette, commonTypography, commonComponents, lightComponents)

export default light
