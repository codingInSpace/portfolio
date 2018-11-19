import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../../shared/layout/Heading'
import Project from './components/Project'
import withAllProjectsForCards from './withAllProjectsForCards'

import styles from './portfolio.module.scss'

const Portfolio = (props) => {
  const { projects, fetchStatus } = props
  console.log(projects)

  return (
    <div>
      <div className={`${styles.section} ${styles.centered}`}>
        <Heading tag="h2" centered>
          Some work
        </Heading>
      </div>
      status: {fetchStatus}
      <div className={styles.projectsContainer}>
        {projects.length > 0
          ? projects.map(project => (
            <Project key={project.id}
                heading={project.title}
                shortText={project.shortDesc}
                tags={project.tags}>
              {project.title}
            </Project>
            ))
          : null}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  fetchStatus: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object)
}

Portfolio.defaultProps = {
  projects: []
}

export default withAllProjectsForCards(Portfolio)
