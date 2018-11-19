import React from 'react'
import PropTypes from 'prop-types'
// import Tag from '../../../components/Tag'
import Heading from '../../../../shared/layout/Heading'
import styles from './project.module.scss'

const Project = props => (
  <div className={styles.project}>
    <img src="https://imgur.com/BlcuLw3.jpg" />
    {props.tags.length > 0 && (
      <p className={styles.tags}>
        {props.tags.map(t => (
          <span key={t}>{t}</span>
        ))}
      </p>
    )}
    <Heading strong>{props.heading}</Heading>
    <p className={styles.desc}>{props.shortText}</p>
  </div>
)

Project.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  shortText: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

Project.defaultProps = {
  img: undefined,
  heading: '',
  shortText: '',
  tags: []
}

export default Project
