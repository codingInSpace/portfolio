import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../../shared/layout/Heading'
import Project from './components/Project'
import withProjects from './withProjects'

import styles from './portfolio.module.scss'

const Portfolio = (props) => {
  const { projects, fetchStatus } = props

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
                tags={['test']}>
              {project.title}
            </Project>
            ))
          : null}
      </div>
    </div>
  )

  /* return (
	<Section>
		<Section pad="large" align="center" textAlign="center">
			<Heading tag="h2" margin="none">Some work</Heading>
		</Section>
		{ Object.values(projects).length > 0 ? (
		  <Section pad={largeHorPadding} margin={largeHorPadding} align="center" alignContent="center">
        <Tiles selectable={true} onSelect={ idx => this.goToProject(idx) } fill={true}>
          { Object.values(projects).map(project => (
            <Tile key={project.id} size="medium" pad="none">
              <Project img={imagesById[project.primary_image_id] ?
              imagesById[project.primary_image_id].link : undefined}
                       heading={project.title}
                       shortText={project.short_desc}
                       tags={ hasTags(project.id) ? tagsByProjectId[project.id] : [] } />
            </Tile>
            )) }
        </Tiles>
      </Section>
      ) : (
					<Box pad="large" align="center" textAlign="center">
            { this.props.projectsLoading ? <Spinning size="large"/> : (
              <Label>There are no projects in the database.</Label>
            ) }
					</Box>
				) }
	</Section>
    )*/
}

Portfolio.propTypes = {
  fetchStatus: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object)
}

Portfolio.defaultProps = {
  projects: []
}

export default withProjects(Portfolio)
