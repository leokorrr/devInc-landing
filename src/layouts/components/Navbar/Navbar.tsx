import { Box, Link, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import devIncLogo from '../../../assets/devinc-logo.svg'
import hamburgerIcon from '../../../assets/hamburger-menu-icon.svg'
import { HamburgerMenu } from './HamburgerMenu'

const MENU_ITEMS = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    title: 'About us',
    link: '#about-us',
  },
  {
    title: 'FAQ',
    link: '#faq',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
]

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const isMobile = useMediaQuery('(max-width:800px)')

  const handleMenuOpen = () => setShowMenu(true)
  const handleMenuClose = () => setShowMenu(false)

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: {
            tabletBig: '60px',
            xs: '20px',
          },
          height: '80px',
          backgroundColor: '#F8F9FA',
        }}
      >
        <Box sx={{
          fontSize: {
            tabletBig: '32px',
            xs: '28px',
          },
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <img src={devIncLogo} alt="logo" />
          <Box component="span" sx={{ ml: '15px' }}>
            devIncubator
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          {!isMobile
            && MENU_ITEMS.map((menuItem) => (
              <Box
                key={menuItem.title}
                component="span"
                sx={{
                  mr: {
                    laptop: '42px',
                    xs: '20px',
                  },
                  fontSize: {
                    laptop: '22px',
                    xs: '20px',
                  },
                  '&:last-of-type': {
                    mr: 0,
                  },
                }}
              >
                <Link
                  href={menuItem.link}
                  sx={{
                    color: '#000000',
                    textDecoration: 'none',
                    transition: '.2s',
                    '&:hover': {
                      color: '#D2042D',
                    },
                  }}
                >
                  {menuItem.title}
                </Link>
              </Box>
            ))}
          {isMobile && (
            <Box
              component="img"
              src={hamburgerIcon}
              alt="hamburger-icon"
              onClick={handleMenuOpen}
            />
          )}
          {showMenu && <HamburgerMenu items={MENU_ITEMS} onMenuClose={handleMenuClose} />}
        </Box>
      </Box>
    </nav>
  )
}
