import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const H1 = 'h1'
const H2 = 'h2'
const H3 = 'h3'
const H4 = 'h4'

const getComponent = (props) => {
  let component
  let classes = `${styles.heading}`

  if (props.strong) {
    classes += ` ${styles.strong}`
  }

  if (props.centered) {
    classes += ` ${styles.centered}`
  }

  switch (props.lvl) {
    case H1:
      component = (
        <h1 className={`${classes} ${styles.heading1}`}>{props.children}</h1>
      )
      break
    case H2:
    default:
      component = (
        <h2 className={`${classes} ${styles.heading2}`}>{props.children}</h2>
      )
      break
    case H3:
      component = (
        <h3 className={`${classes} ${styles.heading3}`}>{props.children}</h3>
      )
      break
    case H4:
      component = (
        <h4 className={`${classes} ${styles.heading4}`}>{props.children}</h4>
      )
      break
  }

  return component
}

const Heading = props => getComponent(props)

Heading.propTypes = {
  tag: PropTypes.oneOf([H1, H2, H3, H4]),
  strong: PropTypes.bool,
  centered: PropTypes.bool
}

Heading.defaultProps = {
  tag: H2,
  strong: false,
  centered: false
}

export default Heading

