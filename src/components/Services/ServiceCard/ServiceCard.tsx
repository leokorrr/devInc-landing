import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Title } from '../../../ui/components/Title'
import IServiceCard from './ServiceCard.interface'
import { StyledServiceCard } from './ServiceCard.style'

export const ServiceCard: React.FC<IServiceCard> = (props) => {
  const { title, icon } = props

  const isLaptop = useMediaQuery('(max-width:1480px)')
  const isTablet = useMediaQuery('(max-width:1240px)')

  return (
    <StyledServiceCard isLaptop={isLaptop} isTablet={isTablet}>
      <div className="service-card">
        <div>
          <div className="service-card__icon">
            <img src={icon} alt="icon" />
          </div>
          <Title size={3} title={title} />
        </div>
      </div>
    </StyledServiceCard>
  )
}
