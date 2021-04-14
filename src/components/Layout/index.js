import React from 'react'
import './index.scss'

export default (props) => {
  return (
    <div className="layout">
      {props.children}
    </div>
  )
}