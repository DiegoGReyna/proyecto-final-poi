import React from 'react'
import './FileUnderRevision.css'
export const FileUnderRevision = (props) => {
  return (
    <div className='ContainerFile'>
      <button>
        <span class="material-symbols-outlined">
          description
        </span>
      </button>
      <p>{props.FileName}</p>
    </div>

  )
}
