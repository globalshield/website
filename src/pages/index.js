import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Home from "../components/Page/Home"

const IndexPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <Home />
    </div>
  )
}

export default IndexPage
