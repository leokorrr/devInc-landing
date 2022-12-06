import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const MainLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)
