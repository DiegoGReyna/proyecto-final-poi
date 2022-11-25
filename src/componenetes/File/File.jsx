import React from 'react'
import './File.css'
export const File = (props) => {
  return (
    <div className='ContainerFile'>
      <button>
        <span className="material-symbols-outlined">
          description
        </span>
      </button>
      <p>{props.FileName}</p>
      <button>
        <span className="material-symbols-outlined">
            delete
         </span>
      </button>
    </div>

  )
}
