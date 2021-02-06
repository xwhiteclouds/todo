import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} 
        style={{
          height: '30px',
          width: '80%',
          border: 'solid lightgray 1px'
        }}/>
        <button type="submit"
        style={{
          padding: '10px',
          border: 'none',
          borderRadius: '2px',
          background: '#2aab47',
          color: 'white',
          marginLeft: '10px'
        }}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)