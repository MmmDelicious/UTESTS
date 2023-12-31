import React from 'react'
import './Modal.css'
export const Modal = ({active,setActive,children}) => {
  return (
    <div className={active ? "modal active": "modal"}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
