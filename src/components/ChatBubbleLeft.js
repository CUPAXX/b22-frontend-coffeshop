import React from 'react'

export default function ChatBubbleLeft(props) {
  return (
    <div className="flex flex-row border-b justify-start mb-8 border-yellow-900 p-3" onClick={props.click}>
      <img src={props.picture} className="rounded-full w-10 h-10" />
      <div className="flex flex-col px-8 justify-center">
          <h3 style={{display: `${props.showMessage}`}} className="text-gray-600 text-sm">{props.message}</h3>
          <img style={{display: `${props.showFileUpload}`}} className="max-w-24 max-h-24" src={props.fileUpload} />
      </div>
   </div>
  )
}
