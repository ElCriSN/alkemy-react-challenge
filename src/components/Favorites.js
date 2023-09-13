import React, { useEffect, useState } from 'react'

function Favorites() {
    const[ favorites, setFavorites ] = useState([])
    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')
        if(favsInLocal != null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavorites(favsArray)
        }
    },[])
  return (
    <>
    <div>Favorites</div>
    <div className="row">
    {
      favorites.map((oneMovie, idx) =>{
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
</> 
  )
  
}

export default Favorites