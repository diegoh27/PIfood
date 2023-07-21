import LangdingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import Detail from './views/Details/Detail';
import CreateRecipe from './views/CreateRecipes/CreateRecipe';
import Diets from './views/Diets/Diets';
import Error from './views/Error/Error'
// import Loading from './views/Loading/Loading';
// import './App.css';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from './redux/actions';
import { useSelector } from 'react-redux';





function App() {




  const dispatch = useDispatch()
  
  const recipesR = useSelector((state) => state.recipesR)

  // const clearAll = () => {
  //   dispatch(clearState())
  // }

  const getOn =  () => {
     dispatch( getAll())
  }
  
  useEffect(() => {
   
   if(!recipesR.length){
    return getOn() 
   } 
  },[]) 


  // useEffect(()=> {
  //   // dispatch(getAll())
  //   if(recipesR.length){
  //     return getOn() 
  //    } 
  //   return clearAll()
  // },[location.pathname !== '/home'])

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
        {/* <Route path='/loading' element={<Loading/>}/> */}
      </Routes>
    </body>
  );
}

export default App;
