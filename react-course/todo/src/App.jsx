import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'

function App() {
  // const todos = ['Eat', 'Code', 'Sleep', 'Repeat']
  const [todos, setTodos] = useState(['Eat', 'Code', 'Sleep', 'Repeat'])
  return (
    <>
      <Header></Header>
      {todos.map((todo, index) => {
        return <List key={index} todo={todo}/>
      })}
     
      <Footer setTodos={setTodos} todos={todos}></Footer>
    </>
  )
}

export default App
