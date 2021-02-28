import React from 'react';
import 'fontsource-roboto';
import TodoForm from './components/TodoForm';
import {Container} from '@material-ui/core';


function App() {
  
  return (
    <main>
      <Container className="container" maxWidth="sm">
        <TodoForm/>
      </Container>
    </main>
  )
}

export default App;