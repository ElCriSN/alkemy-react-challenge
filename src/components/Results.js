import { useEffect, useState } from "react"

import axios from "axios";


export default function Results() {

  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('keyword')

  const [movieResults, setMovieResults] = useState([])
  useEffect (
    () => {
      useEffect(() => { 
        const endpoint = ''
        axios.get(endpoint)
          .then(res => {
            const moviesArray = res.data.results
            if (moviesArray.length === 0) {
              'Itente más tarde =)!'
            }
            setMovieResults(moviesArray)
          })
          .catch(err => 
            console.log(err)
        )
      }, [keyword])
    }
  )
  
  return (
    <div>
      
      <p>buscaste: <em> {keyword}</em></p>
      {movieResults.length === 0 && <h1>Vacío =P</h1>}
      <div className="row">
    {
      movieResults.map((oneMovie, idx) =>{
        return (
        
          <div className="col-3">
              <div className="card">
                  <img src="" className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text"></p>
                      <Link to="/detail?" className="btn btn-primary"></Link>
                  </div>
              </div>
          </div> 
      
   
        )
      })
}
</div>
      </div>
  )
}
