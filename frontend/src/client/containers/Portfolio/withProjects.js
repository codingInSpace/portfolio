import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const PROJECTS_QUERY = gql`
  {
    projects {
      id
      title
      shortDesc
    }
  }
`

const withProjects = BaseComponent => () => (
	<Query query={PROJECTS_QUERY}>
		{({ loading, error, data }) => {
  if (loading) {
    return <BaseComponent fetchStatus={'fetching'} projects={{}} />
  }
  if (error) {
    return <BaseComponent fetchStatus={'error'} projects={{}} />
  }

  return <BaseComponent fetchStatus={'ok'} projects={data.projects} />
}}
	</Query>
)

export default withProjects
