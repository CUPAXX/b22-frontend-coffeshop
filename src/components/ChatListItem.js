import React from 'react'

export default function ChatListItem(props) {
  return (
    <div onClick={props.click} className="flex flex-row border-b cursor-pointer pt-8 w-full border-white p-3">
      <img src={props.picture} className="rounded-full w-16 h-16" />
      <div className="flex flex-col px-5">
        <h2 className="text-white font-bold">{props.userName}</h2>
        <h3 className="text-white text-sm">{props.message}</h3>
      </div>
    </div>
  )
}
