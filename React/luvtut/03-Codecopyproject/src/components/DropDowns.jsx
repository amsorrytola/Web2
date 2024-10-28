import React from 'react'
const DropDownsList = [
    {
        id: 1,
        name: "Code",
        elements: ["Code","Text","Json"]
    },
    {
        id: 2,
        name: "Time",
        elements: ["1 Month","1 Year","Never"]
    },
    {
        id: 3,
        name: "Visibility",
        elements: ["Public","Private"]
    }
]


function DropDowns({name}) {
  const elements = DropDownsList.find((element) => element.name === name).elements

  return (
    <div>
      <select>
        {/* <option value="">{name}</option> */}
        {elements.map((element) => {
          return <option value={element}>{element}</option>
        })}
      </select>
    </div>
  )
}

export default DropDowns
