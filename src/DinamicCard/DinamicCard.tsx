import React, { useState } from 'react'
import './style.css'


type Props = { 
    title: string
    content: string // key  не передается оно зарезервированно 
}


export default function DinamicCard (props: Props){ 
  const [show, setShow] = useState(false)

    return (<div className="card">
    <div className="card-title" > <button className="button-card" onClick={() => setShow(!show)}>
        <svg  width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8L0.669872 0.5L9.33013 0.5L5 8Z" fill="#131111"/>
    </svg></button>
    {props.title}</div>
    <div className="card-content" style={{display:show ? 'block' : 'none'}} >{props.content} </div>
    </div>)
}