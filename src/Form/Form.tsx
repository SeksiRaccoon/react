import React, { useState } from "react" 
import "./style.css"



export default function Form () {

    const [email, setEmail] : [string, any]   = useState("")
    const [password, setPassword] : [string, any] = useState("")
    const data = [email, password]
    function Submit(event:any){ 
        event.preventDefault();
        console.log(...(data))
    }
    return (
   <form className="form" onSubmit={Submit}>
       <div className="form-inner"> 
           <div className="information"><p>EMAIL</p><span className={ email!== "" ? "allOk": "warning"}> введите email</span></div>
            <div className="form-group">
                <input type="email"  placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className="information"><p>PASSWORD</p><span className={ password!== "" ? "allOk": "warning"}> введите password</span></div>
            <div className="form-group">
                <input type="text"  placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            </div>
       </div>
       <div className="footer">
            <div className="container">
            <button type="submit" className="button">SUBMIT</button>
            </div>
       </div>
   </form>)
}