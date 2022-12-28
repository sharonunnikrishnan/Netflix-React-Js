import React from 'react' 
import NavBar from './Components/Navbar/NavBar'
import './Components/App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,originals,comedy,romance,horror,documentory} from './urls'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={documentory} title='Documentory' isSmall/>
    </div>
  )
}

export default App
