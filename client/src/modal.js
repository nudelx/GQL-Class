import React from 'react'
import BookForm from './bookForm'

export default ({ showModal, setShowModal }) => {
  return (
    <>
      <div className="row flex-spaces child-borders"></div>
      <input
        className="modal-state"
        id="modal-1"
        type="checkbox"
        checked={showModal}
        onChange={setShowModal}
      />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-1">
            X
          </label>
          <h4 className="modal-title">Add New Book</h4>
          <h5 className="modal-subtitle">Fill all required fields</h5>
          <div className="modal-text">
            <BookForm />
          </div>
        </div>
      </div>
    </>
  )
}
