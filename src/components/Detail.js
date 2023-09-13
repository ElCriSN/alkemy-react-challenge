import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios";
function Detail() {

    let token = sessionStorage.getItem('token')
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID') 
  const [movie, setMovie] = useState(null)

    useEffect(() => { 
      const endpoint = ''
      axios.get(endpoint)
        .then(res => {
          const movieData = res.data
          setMovie(movieData)
        })
        .catch(err => {
          console.log(err)
        })
    }, [movieID])
  return (
    <div>{
        !token && <Navigate to='/'/>
    }
    { !movie && <p>Cargando...</p>}
    { movie &&
     Detail}
   </div>
  )
}

export default Detail