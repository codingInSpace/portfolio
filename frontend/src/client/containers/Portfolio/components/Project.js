import React from 'react'
import PropTypes from 'prop-types'
import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'

import Tag from '../../../components/Tag'

const Content = props => (
  <Box>
    <Label margin="none">{props.shortText}</Label>
    <Box pad="none" direction="row">
      {props.tags.length > 0 &&
        props.tags.map(tag => <Tag key={tag} label={tag} />)}
    </Box>
  </Box>
)

const Project = props => (
  <Card thumbnail={props.img}
      heading={props.heading}
      description={<Content shortText={props.shortText} tags={props.tags} />}
      />
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

Content.propTypes = {
  shortText: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Project
