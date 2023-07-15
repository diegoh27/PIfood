import LangdingPage from './views/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Detail from './views/Details/Detail';
import CreateRecipe from './views/CreateRecipes/CreateRecipe';
import Diets from './views/Diets/Diets';
import Error from './views/Error/Error'
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from './redux/actions';


function App() {

  const location = useLocation();

  const dispatch = useDispatch()
 
  
  useEffect(()=> {
    dispatch(getAll())
   
  },[])

  


  
  return (
  
    <body className="App body_app">
        {/* {
          location.pathname !== '/' ? <NavBar /> : null
        } */}
      <Routes>
        <Route path="/" element={<LangdingPage/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<CreateRecipe/>} />
        <Route path='/diets' element={<Diets/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </body>
  );
}

export default App;
