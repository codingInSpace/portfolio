import React from 'react'
import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'

import Tag from '../../../components/Tag'

const Content = props => (
  <Box>
    <Label margin="none">{props.shortText}</Label>
    <Box pad="none" direction="row">
      { props.tags.length > 0 && props.tags.map(tag => (
        <Tag key={tag.id} label={tag.label} />
      ))}
    </Box>
  </Box>
)

const Project = props => (
  <Card thumbnail={props.img}
        heading={props.heading}
        description={<Content shortText={props.shortText} tags={props.tags} />} />
)

export default Project
