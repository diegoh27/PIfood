import { Link } from "react-router-dom";
import img from '../../utils/cooking.png'
import { useDispatch } from "react-redux";
import { getAll } from "../../redux/actions";
import { useEffect } from "react";
import "./landingStyle.css"


const LangdingPage = () => {

    const dispatch = useDispatch();

    // useEffect(()=> {
    //     const res = async () => {

    //       await dispatch(getAll())
    //     }
        
    // },[])

    const uploadData = () => {
        dispatch(getAll())
      }
    

    return (
        
    <div>
        <div className="container">
            <Link to='/home'>
                <img src={img} alt="cooking.png" className="container_img" onClick={uploadData} />
            </Link>
            <h1>Bienvenute to your Food aplication</h1>
        </div>
    </div>
    
    )
}


export default LangdingPage;