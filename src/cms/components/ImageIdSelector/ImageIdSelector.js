import React from 'react'
import PropTypes from 'prop-types'
import Select from 'grommet/components/Select'

//TODO: make self-contained with data
class ImageIdSelector extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ),
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  updateSelected(option) {
    console.log(option.value, option.sub)
    this.props.onSelect(option.value)
  }

  render() {
    return (
      <Select placeHolder="Image id"
              options={this.props.images}
              value={this.props.value || undefined}
              onChange={e => this.updateSelected(e.option)} />
    )
  }
}

export default ImageIdSelector
