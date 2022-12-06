import React from 'react'
import { AboutUs } from '../../components/AboutUs'
import { ContactUs } from '../../components/ContactUs'
import { FAQ } from '../../components/FAQ'
import { Intro } from '../../components/Intro'
import { Projects } from '../../components/Projects'
import { Services } from '../../components/Services'

export const ContentPage: React.FC = () => (
  <div>
    <Intro />
    <Services />
    <Projects />
    <AboutUs />
    <FAQ />
    <ContactUs />
  </div>
)
