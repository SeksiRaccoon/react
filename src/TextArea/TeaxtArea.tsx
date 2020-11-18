import { type } from "os"
import React, { useState } from "react" 
import "./style.css"


export default function CountText () { 

//==============================counter 
//    return( <div>
//    <input className="text" onChange={(event) =>  setCounter(event.target.value.length)}></input> 
//    <div>{counter}</div>
//    </div>
//    )

//==============================clear input
// const [value, setValue] : any  = useState("") 
// const changedValue : any  = (event : any) => setValue(event.target.value)
// const clearValue: any = () => setValue("")
// return (
//    <div> 
//       <input type="text" value={value} onChange={changedValue} ></input>
//       <button onClick={clearValue}> </button>
//    </div>
// )
//================================limeted input

// const [limit, setLimit] : any = useState("")
// const countValue: any = (event: any) => { if (event.target.value.length <= 100)setLimit(event.target.value)}
// return( <div>
// <input value={limit} onChange={countValue} ></input>
// <div><p className={limit.length === 100 ? "warning": "hide" } > Лимит символов:100</p></div>
// </div>
// )

//================================only number

//  const [numb, setNumber ]  = useState("")
//  const handleNumber = (event:any) =>{ if (!isNaN (event.target.value)) {setNumber(event.target.value)}}
// return(
//    <input type="text" value={numb} onChange={handleNumber}></input>
// )
// let [numb , setNumb] = useState("")
// const handleNumber:any = (event:any) => { 
//  if(event.target.value[0] === '-') {setNumb( "-"+event.target.value.replace(/[^\d]/g, ''))}
//  else setNumb(  event.target.value.replace(/[^\d]/g, '')) }
// return(
//    <input type="text" value={numb} onChange={handleNumber}></input>
// )
// const [numb, setNumber ] :any  = useState("")
//  const handleNumber = (event:any) =>{ if (Number(event.target.value) || event.target.value === '-' ) {setNumber(event.target.value)} }
// return(
//    <input type="text" value={numb} onChange={handleNumber}></input>
// )
// const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//   const [value, setValue] = useState('')
//   const handleChange: any = (e:any) => {
//     const numbersOnly = e.target.value
//       .split('')
//       .filter((char:any, index:any) => {
//         if (!index) return numbers.includes(char) || char === '-'
//         return numbers.includes(char)
//       })
//       .join('')
//     setValue(numbersOnly)
//   }
//   return <input type='text' value={value} onChange={handleChange} />


   // const [value, setValue] = useState('')
   // const handleChange: ChangeEventHandler<HTMLInputElement> = (e:any) =>
   //   setValue(e.target.value.replace(/[^-\d]/g, '').replace(/(.)-/, '$1'))
   // return <input type='text' value={value} onChange={handleChange} />
 
   // function NumberInput3() {
   //    const [value, setValue] = useState('')
   //    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
   //      setValue(parseInt(e.target.value).toString())
   //    return <input type='text' value={value} onChange={handleChange} />
   //  }
   //  function NumberInput4() {
   //    const [value, setValue] = useState('')
   //    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
   //      let numbersOnly = ''
   //      for (let i = 0; i < e.target.value.length; i++) {
   //        const char = e.target.value[i]
   //        if (!numbersOnly.length && char === '-') {
   //          numbersOnly += '-'
   //        } else if (numbers.includes(char)) {
   //          numbersOnly += char
   //        }
   //      }
   //      setValue(numbersOnly)
   //    }
   //    return <input type='text' value={value} onChange={handleChange} />
   //  }
}