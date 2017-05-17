import React from 'react'
import Label from 'grommet/components/Label'

const Tag = (props) => {
  const { label } = props
  return (
    <Label margin="none"
           style={{paddingRight: 5}}>
      {label}
    </Label>
  )
}

export default Tag