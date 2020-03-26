import React from 'react'
import Stars from './stars'
export default () => {
  return (
    <div className="bookForm">
      <div className="form-group">
        <label htmlFor="book-name">Book Name</label>
        <input
          width="100%"
          type="text"
          placeholder="Nice input"
          id="book-name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="book-genre">Genre</label>
        <select id="paperSelects1">
          <option value="0">-- Select -- </option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Art">Art</option>
          <option value="Encyclopedia">Encyclopedia</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input type="text" placeholder="Nice input" id="author" />
      </div>
      <div className="form-group">
        <label>Stars</label>
        <div>
          <Stars onChange={console.log} />
        </div>
      </div>
    </div>
  )
}
