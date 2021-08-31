import React from 'react'

export default function ChatSearchItem(props) {
  return (
    <div onClick={props.click} className="flex flex-row cursor-pointer pt-8 p-3">
      <img src={props.picture} className="rounded-full w-16 h-16" />
      <div className="flex flex-col px-5">
        <h2 className="text-gray-500 font-bold">{props.userName}</h2>
        <h3 className="text-gray-500 text-sm">{props.phoneNumber}</h3>
      </div>
    </div>
  )
}
