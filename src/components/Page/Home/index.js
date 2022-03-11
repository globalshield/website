import * as React from "react"
import Layout from "../../layout"
import AppHeader from "../../AppHeader"
import SectionMissionVision from "../../Sections/SectionMissionVision"
import SectionGithub from "../../Sections/SectionGithub"
import SectionFeatures from "../../Sections/SectionFeatures"
import SectionAboutUs from "../../Sections/SectionAboutUs"
import SectionApi from "../../Sections/SectionApi"
import AppFooter from "../../AppFooter"
import SectionStandWithUkraine from "../../Sections/SectionStandWithUkraine"

// Header siteTitle={data.site.siteMetadata?.title || `Title`}

const Home = () => {
  return (
    <Layout>
      <AppHeader />
      <section className={"bg-bg-light-gray py-14 lg:py-20"}>
        <SectionMissionVision />
        <SectionStandWithUkraine />
      </section>
      <SectionGithub />
      <SectionFeatures />
      <SectionApi />
      <SectionAboutUs />
      <AppFooter />
    </Layout>
  )
}

export default Home
