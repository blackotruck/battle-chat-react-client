import React from 'react'
import './Lock.scss'

const LockScreen = props => (
  <div className="lock-grid">
    <div className="lock-content">
      {props.children}
    </div>
  </div>
)

export default LockScreen;
