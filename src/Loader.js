import React from 'react'

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
