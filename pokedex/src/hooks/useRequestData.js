import React, { useState, useEffect } from 'react'
import axios from 'axios'


export function useRequestData(url, initialState) {
   const [data, setData] = useState(initialState)

   useEffect(()=> {
       axios.get(url)
       .then((response) => {
           setData(response.data.results)
       })
       .catch((error) => {
           console.log(error)
       })
   }, [url])

   return data
}
