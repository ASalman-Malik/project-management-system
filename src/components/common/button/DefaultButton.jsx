import React from 'react'

const DefaultButton = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
} 
const SmallButton = (props) => {
    return (
      <div>
          <button onClick={props.handleClick}>{props.name}</button>
      </div>
    )
  } 

export {DefaultButton,SmallButton}