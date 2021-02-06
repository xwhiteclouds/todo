import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div style={{width: '80%', margin: 'auto', marginTop: '70px'}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App