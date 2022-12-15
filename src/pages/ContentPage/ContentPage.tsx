import React from 'react'
import { AboutUs } from '../../components/AboutUs'
import { ContactUs } from '../../components/ContactUs'
// !IMPORTANT uncomment when develop content for FAQ
// import { FAQ } from '../../components/FAQ'
import { Intro } from '../../components/Intro'
import { Projects } from '../../components/Projects'
import { Reviews } from '../../components/Reviews'
import { Services } from '../../components/Services'

export const ContentPage: React.FC = () => (
  <div>
    <Intro />
    <Services />
    <Projects />
    <AboutUs />
    <Reviews />
    {/* !IMPORTANT uncomment when develop content for FAQ  */}
    {/* <FAQ /> */}
    <ContactUs />
  </div>
)
