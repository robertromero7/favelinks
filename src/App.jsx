import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Table from './components/Table';
import Form from './components/Form';



function App() {

  const [favLinks, setFavLinks] = useState([])
  let handleNewSubmission = (data)=>{
    setFavLinks([...favLinks,data])
  }
  return(

    <div>
        <h1>Submit your fave links!</h1>

        <Form onNewSubmit={handleNewSubmission}/>
        <Table links={favLinks}/>
        
    </div>
  )
}

export default App
