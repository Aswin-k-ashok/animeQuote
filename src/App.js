import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
const [state,setState]= useState({})

let url = 'https://animechan.vercel.app/api/random'

async function getQuote (){
  const quote  = await axios.get('https://animechan.vercel.app/api/random')
  setState(quote.data)
  console.log(state)
}

  return (
    <div className="App">
    <h1>
  {state.anime}
</h1>
<p id="sentence" contenteditable="true" spellcheck="false">
  {state.quote}
  <br></br>
  <strong style={{textAlign:'end'}}>- {state.character}</strong>
</p>


    <button onClick={()=>{getQuote()}} className='custom-btn btn-2'>
      <>get your quote</>
    </button>

    </div>
  );
}

export default App;
