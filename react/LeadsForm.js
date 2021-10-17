import React, {useState} from "react"
import axios from "axios";
import { useCssHandles } from "vtex.css-handles"

import "./index.css"

const CSS_HANDLES = ["arrow","inputFormat","leftText","container", "emailInput","formStyle","btnSend","border"]


const LeadForm = () => {
   
   const [email,setEmail]=useState("")
   const [name,setName]=useState("")
   const [game,setGame]=useState("")
  
   const handles = useCssHandles(CSS_HANDLES)    
  
  const handleSubmit = e => {
    e.preventDefault();
  //  email.value=""
    const data = {      
      email
    };
    axios
     

      .post("https://7flf4ocuok.execute-api.sa-east-1.amazonaws.com/prod", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
window.location = "/"
  };

   
   
    return (
        
        <div className={`${handles.container}`}>
        
          
            <div className={`${handles.leftText}`}>
                <h3>Se inscriba na newsletter</h3>
                <p>Receba no seu e-mail nossas novidades e cupons de desconto.</p>
            </div>
        
        

        <form className={`${handles.formStyle}`} onSubmit={handleSubmit}>          
        
        <input
          type="text" name="name"
            className={`${handles.emailInput}`}
            placeholder="Digite seu nome" value={name}
            onChange={(e)=>setName(e.target.value)} required
          />          
        <input
          type="email" name="email"
            className={`${handles.emailInput}`}
            placeholder="Digite seu e-mail" value={email}
            onChange={(e)=>setEmail(e.target.value)} required
          />          
        <input
          type="text" name="game"
            className={`${handles.emailInput}`}
            placeholder="Qual seu videogame?" value={game}
            onChange={(e)=>setGame(e.target.value)} required
          />          
          <button
          className={`${handles.btnSend}`}
          type="submit">Cadastrar</button>
                 
        </form>
        
        </div>
        
    )
}

export default LeadForm