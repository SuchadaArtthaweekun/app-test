import React, { useEffect, useState } from 'react'
import Tabledata from './Table'


function Api() {

  const [api , setApi] = useState([])

  useEffect (() => {
    fetch("https://www.melivecode.com/api/th/attractions")
    .then(res => res.json())
    .then(
        (result) => {
            setApi(result);
        }
    )
  }, [])

  console.log(api)


  return(
    <div>
        <Tabledata api={api}/>
    </div>
  )
}
  

export default Api