import { Box } from '@mui/material'
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { PARTICLES_CONFIG } from '../../utils/constants'
import { StyledIntro } from './Intro.styles'

export const Intro = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <StyledIntro className="section" id="welcome">
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '84vh',
        '& > div': {
          height: '100%',
        },
      }}
      >
        <Particles init={particlesInit} options={PARTICLES_CONFIG} />
      </Box>
      <Box
        id="intro"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '84vh',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <svg height="200" stroke="#000000" strokeWidth="2" className="text-line" width="100%">
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">devIncubator</text>
        </svg>
      </Box>
    </StyledIntro>
  )
}
