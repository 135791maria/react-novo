
import './App.css'
import axios from "axios"

const api = axios.create({
baseURL: "http://localhost:3001"
})


function App() {
  
api.get("/usuarios").then((response) =>{
  console.log(response)
})
  return (
    
      
        <div>
<h1>Usuarios</h1>

        </div>
  )
}
export default App
