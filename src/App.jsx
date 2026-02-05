
import './App.css'
import Badges from './components/Badges'

function App() {

  return (
    <div className='app'>
      <h1>My Homework For Week1</h1>
      <p>A simple reusable component</p>

      <Badges label="Name:" value="Amenah"></Badges>
      <Badges label="Last Name:" value="Askari"></Badges>
      <Badges label="Age:" value="22"></Badges>
      <Badges label="Country:" value="Afghanistan"></Badges>


    </div>
  )

}

export default App
