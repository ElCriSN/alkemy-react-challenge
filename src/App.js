
import './App.css';
import {Routes, Route} from 'react-router-dom'

//Components

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './components/Detail';
import Results from './components/Results';
import Favorites from './components/Favorites';


function App() {
  const addOrRemoveFavs = () => {

  }
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Login />}/> 
    <Route path="/list" render={(props)=> <List addOrRemoveFavs={addOrRemoveFavs}{...props}/>}/>
    <Route path="/detail" element={<Detail />}/>
    <Route path="/results" element={ <Results  />} />
    <Route path="/favorites" element={ <Favorites  />} />
    </Routes>
    <Footer />
        </>
  );
}

export default App;
