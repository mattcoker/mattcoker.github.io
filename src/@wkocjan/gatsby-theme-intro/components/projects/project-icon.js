import React from "react"
import { FaCompass, FaGithub } from "react-icons/fa"
import { ProjectType } from "@wkocjan/gatsby-theme-intro/src/types"

const ProjectIcon = ({ icon }) => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    {icon === "github" ? (
      <FaGithub color="#a7aeb8" className="w-6 h-6" />
    ) : (
      <FaCompass color="#a7aeb8" className="w-6 h-6" />
    )}
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
}

export default ProjectIcon