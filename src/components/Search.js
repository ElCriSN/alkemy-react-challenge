
import swal from "@sweetalert/with-react";

export default function Search() {
    const handlerSubmit = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()
        if (keyword.length === 0) {
            'Escrinbe una palabraclave =)!'
        } else if (keyword.length < 4) {
            'Más de 4 caracteres por faovr =P!'
        } else {
            e.currentTarget.keyword.value = '';
            <Navigate to='/results?keyword=${keyword}'/>
        }
    } 
  return (
    
   
    <form onSubmit={handlerSubmit}>
        <label>
            <input type="text" name="keyword" placeholder="Write a keyword please"/>
        </label>
        <br />
  
            <button type="submit">Search</button>
    </form>
  )
}
