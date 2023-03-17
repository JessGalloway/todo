import React from 'react'


//category will be passed in as prop
export default function SingleCategory(props) {
  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
    </tr>
  )
}
