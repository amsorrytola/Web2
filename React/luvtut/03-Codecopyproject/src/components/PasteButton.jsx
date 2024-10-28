import React from 'react'
const buttontext = [
    {
        id: "Home",
        content: "Create My Paste"
    },
    {
        id: "View",
        content: "Add To My Pastes"
    },
    {
        id: "Edit",
        content: "Update My Pastes"
    }
]

function PasteButton({id}) {
  const text =buttontext.find((element) => element.id === id).content
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</button>
    </div>
  )
}


export default PasteButton
