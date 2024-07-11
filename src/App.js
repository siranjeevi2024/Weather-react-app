import axios from "axios"
import { useState } from "react"

function App() {

  const[deg,setdeg] = useState("0")
  const[city,setcity] = useState("France")
  const[desc,setdesc] = useState("Raining")
  const[enteredvalue,setenteredvalue] = useState("")

  function handleInput(event){
    //console.log(event.target.value)
    setenteredvalue(event.target.value)

  }
  
   
  function getData()
  {
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=048a0c2976439cbbf5ebd8d3ff142a22`)

    weather.then(function(dalta){
      setdeg(dalta.data.main.temp)
    })

    weather.then(function(dataa){
      setcity(dataa.data.name)
    })

    weather.then(function(dataaa){
      setdesc(dataaa.data.weather[0].description)
    })

    
  }



  return(
    <div className="flex flex-row justify-center h-[100vh] items-center" >
    <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow">
    <h1 className="font-medium ">Hey! 🌥️</h1>
    <p className="text-xs pt-1 pb-1" >Do You Want TO Know The Weather Report :)</p> 
    <input onChange={handleInput} className="rounded-md h-6 mt-2 text-sm p-2 outline-none" placeholder="City Name? " ></input>
    <br></br>
    <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
    <p className="text-xs mt-2 mb-2 mr-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
  </div>
  </div>

  )

}

export default App;
