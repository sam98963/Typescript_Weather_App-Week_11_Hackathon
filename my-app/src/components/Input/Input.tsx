import { useState } from "react"

type fetchesProps = {
  fetches: (city:string)=>void
}

function InputCity(props:fetchesProps){
  const [inputText, setInputText] = useState("")
   const {fetches} = props

  function handleChange(inputValue:string){
    setInputText(inputValue)
    console.log(inputValue)
  }
 
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    console.log("search")
    fetches(inputText)
  }


  return(<div>
    <form>
      <label>Search Cities:<input type="text" placeholder="Enter city name..." onChange={e=>handleChange(e.target.value)}></input></label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  </div>)
}

export default InputCity