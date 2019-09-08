import React from 'react'
import { Router } from '@reach/router'
import FormDemo01 from './form-demos/form-demo-01'
import FormDemo02 from './form-demos/form-demo-02'

function App() {
  return (
    <Router>
      <FormDemo01 path="/" default />
      <FormDemo01 path="/form-demo-01" />
      <FormDemo02 path="/form-demo-02" />
    </Router>
  )
}

export default App
