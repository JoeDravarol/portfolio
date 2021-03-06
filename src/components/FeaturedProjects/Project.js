import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import DemoLink from './DemoLink'
import ProjectTechnologies from 'components/ProjectTechnologies'
import ProjectLinks from 'components/ProjectLinks'

const Project = ({
  title,
  description,
  technologies,
  repositoryLink,
  demoLink,
  imageData,
}) => (
  <section className="featured">
    <div className="featured__content">
      <DemoLink link={demoLink}>
        <h3 className="featured__title">{title}</h3>
      </DemoLink>
      <p className="featured__description">{description.description}</p>

      <ProjectTechnologies
        projectType="featured"
        projectTitle={title}
        technologies={technologies}
      />
      <ProjectLinks
        projectType="featured"
        repository={repositoryLink}
        demo={demoLink}
      />
    </div>

    <div className="featured__img-container">
      <DemoLink link={demoLink}>
        <Image
          className="featured__img"
          fluid={imageData}
          alt={`${title}'s project preview`}
        />
      </DemoLink>
    </div>
  </section>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  technologies: PropTypes.array.isRequired,
  repositoryLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
}

export default Project
