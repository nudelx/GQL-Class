import React, { useReducer } from 'react'
import Stars from './stars'
export default ({ onCancel }) => {
  const initialState = {
    bookName: '',
    bookGenre: '',
    bookAuthor: '',
    bookStars: 3,
    errors: {}
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'VALIDATE':
        return { ...state, errors: action.errors }
      default:
        return { ...state, [action.type]: action.value }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const makeDispatcher = type => e => dispatch({ type, value: e.target.value })
  const validate = state => {
    const errors = Object.keys(state).reduce(function(all, value) {
      if (value !== 'errors') {
        all[value] = state[value].length ? null : value
      }
      return all
    }, {})
    dispatch({ type: 'VALIDATE', errors })
  }
  const { errors } = state
  return (
    <div className="bookForm">
      <div className="form-group">
        <label htmlFor="book-name">Book Name</label>
        <input
          onChange={makeDispatcher('bookName')}
          width="100%"
          type="text"
          value={state.bookName}
          placeholder="Nice input"
          id="book-name"
          className={errors['bookName'] && 'error'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="book-genre">Genre</label>
        <select
          id="paperSelects1"
          onChange={makeDispatcher('bookGenre')}
          className={errors['bookGenre'] && 'error'}
        >
          <option value="0">-- Select -- </option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Art">Art</option>
          <option value="Encyclopedia">Encyclopedia</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          placeholder="Nice input"
          id="author"
          onChange={makeDispatcher('bookAuthor')}
          className={errors['bookAuthor'] && 'error'}
        />
      </div>
      <div className="form-group">
        <label>Stars</label>
        <div>
          <Stars
            value={state.bookStars}
            onChange={value => dispatch({ type: 'bookStars', value })}
          />
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => validate(state) && console.log(state)}
          className="btn-success"
        >
          Add
        </button>
        <button onClick={() => onCancel(false)} className="btn-warning">
          Cancel
        </button>
      </div>
    </div>
  )
}
