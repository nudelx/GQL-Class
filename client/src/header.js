import React from 'react'

export default ({ title, onAdd }) => {
  return (
    <div className="header">
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <a href="/">{title}</a>
          </h3>
        </div>
        <div className="inline ">
          <button onClick={onAdd} className="btn-small">
            Add
          </button>
        </div>
        <div className="collapsible">
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <a href="https://github.com/nudelx/GQL-Class">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
