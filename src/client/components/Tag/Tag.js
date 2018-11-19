import React from 'react'
import Label from 'grommet/components/Label'

import { tagColors } from '../../../appConfig'
import hash from '../../utils/hash'

const Tag = (props) => {
  const { label } = props

  const hashValue = hash(label)
  const colorIndex = Math.abs(hashValue) % tagColors.length
  const color = tagColors[colorIndex]

  return (
    <Label margin="none"
           style={{paddingRight: 5, color}}>
      {label}
    </Label>
  )
}

export default Tag