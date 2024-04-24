import React, { useState } from 'react'
import axios from 'axios'


const Api = () => {
      const[content,setContent]=useState('')

     const[author,setAuthor]=useState()

    const new_quote=()=>{
        axios.get('https://api.quotable.io/random').then(response=>{
          console.log(response.data.content,'by',response.data.author)
          setContent(response.data.content)
          setAuthor(response.data.author)
        }).catch(error=>{
          console.log(error)
        })
      }
    
    
  return (
    <div className='container p-5'>
<h1 className='text-success m-5 mt-0'>{content}</h1>
<p className='text-primary m-5 mt-0'>{author}</p>
<div className="contanier-fluid m-5">
  
     <button 
     onClick={new_quote}
      className='btn-btn-info'>display new quote</button>
        </div>
        </div>
  )
}

export default Api