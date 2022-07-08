import {
  Box, Link, List, ListItem,
} from '@mui/material'
import React from 'react'
import IHamburgerMenu from './HamburgerMenu.interface'
import closeIcon from '../../../assets/close-icon.svg'
import { StyledHamburgerMenu } from './HamburgerMenu.style'

export const HamburgerMenu: React.FC<IHamburgerMenu> = (props) => {
  const { items, onMenuClose } = props

  return (
    <StyledHamburgerMenu>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
        onClick={onMenuClose}
      >
        <Box component="img" src={closeIcon} alt="hamburger-icon" />
      </Box>
      <List>
        {items.map((item) => (
          <ListItem
            onClick={onMenuClose}
            key={item.title}
            sx={{
              px: 0,
              fontSize: '20px',
            }}
          >
            <Link
              sx={{
                color: '#000000',
                textDecoration: 'none',
              }}
              href={item.link}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </StyledHamburgerMenu>
  )
}
