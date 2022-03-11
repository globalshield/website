import * as React from "react"
import PropTypes from "prop-types"

const SectionMissionVision = ({ title, description }) => (
  <div className={"p-6 sm:p-8 md:p-10 lg:p-12 bg-white rounded-2xl mb-12"}>
    <h1 className={"text-4xl text-heading-primary"}>{ title }</h1>
    <div className={"mt-4 text-default lg:text-lg"}>
        { description }
    </div>
  </div>
)

SectionMissionVision.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default SectionMissionVision
