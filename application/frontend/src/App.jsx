import './App.css'
import Navbar from './components/Navbar' 
import Login from './pages/Login'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Login />
      </div>
    </>
  )
}

export default App