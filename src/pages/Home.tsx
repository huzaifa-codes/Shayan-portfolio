import React from 'react'
import Hero from '../component/widgets/Hero'
import Tags from '../component/shared/ui/Tags'
import AboutSection from '../component/widgets/AboutUs'
import WorkSection from '../component/widgets/WorkSection'
import CaseStudySection from '../component/widgets/CaseStudySection'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Tags />
      <AboutSection />
      <WorkSection />
      <CaseStudySection />
    </div>
  )
}

export default Home
