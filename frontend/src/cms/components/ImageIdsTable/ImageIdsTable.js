import React from 'react'
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const ImageIdsTable = (props) => {
  return (
    <Table>
      <thead>
      <tr>
        <th>
          Id
        </th>
        <th>
          Name/description
        </th>
      </tr>
      </thead>
      <tbody>
      { props.imagesById && Object.values(props.imagesById).map(img => (
        <TableRow key={img.id}>
          <td>
            {img.id}
          </td>
          <td>
            {img.description}
          </td>
        </TableRow>
      ))}
      </tbody>
    </Table>
  )
}

export default ImageIdsTable
