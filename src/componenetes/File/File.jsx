import React from 'react'
import './File.css'
export const File = () => {
  return (
    <div className='ContainerFile'>
      <button>
        <span class="material-symbols-outlined">
          description
        </span>
      </button>
      <p>Nombre Del archivo</p>
      <button>
        <span className="material-symbols-outlined">
            delete
         </span>
      </button>
    </div>

  )
}
