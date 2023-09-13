import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";

const List = (props) => {

  
    let token = sessionStorage.getItem('token')
       
    const [moviesList, setMoviesList] = useState([])
    useEffect(()=>{
        const endpoint =''
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data
                setMoviesList(apiData.results)
            })
            .catch(error => {
                swal(<h2>Hubo errores, intente más tarde!</h2>)
            })
    }, [setMoviesList])
  
    return (
        <>
            { !token && <Navigate to='/'/>}
                <div className="row">
            <div className="col-3">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <button className="favorite-btn"
                        onClick={props.addOrRemoveFavs}>
                    🖤
                    </button>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <Link to="/detail?" className="btn btn-primary"></Link>
                    </div>
                </div>
            </div> 
        
        </div>
        </>


    )
};

export default List;