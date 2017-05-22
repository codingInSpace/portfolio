import React from 'react'
import { connect } from 'react-redux'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Box from 'grommet/components/Box'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Image from 'grommet/components/Image'
import TextInput from 'grommet/components/TextInput'

import { imagesEntityThunks } from '../../../shared/entities/Images'
import setHeaderView from '../../../shared/HOC/setHeaderView'

class ManageImages extends React.Component {
  componentWillMount() {
    this.props.getImages()
  }

  render () {
    const { imagesById } = this.props
    const thereAreImages = Object.keys(imagesById).length > 0

    return (
      <div>
        <Section pad="large">
          <Heading tag="h2" margin="none">Images</Heading>
          <Label margin="small">album id: {process.env.IMGUR_API_ALBUM}</Label>
        </Section>
        <Section>
          <Box>
            <Tiles selectable={false} fill={true}>
            { thereAreImages && Object.values(imagesById).map(img => (
              <Tile key={img.id} pad="small">
                <Image src={img.link} alt={img.id} caption={img.description || undefined}/>
                <TextInput value={img.id} />
              </Tile>
            ))}
            </Tiles>
          </Box>
        </Section>
      </div>
    )
  }
}

const mapState = state => ({
  imagesById: state.imagesById
})

const mapDispatch = dispatch => ({
  getImages: id => dispatch(imagesEntityThunks.getAllImages()),
})

export default connect(mapState, mapDispatch)(setHeaderView(ManageImages, true))
