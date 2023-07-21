import './nameError.css'
import { useDispatch } from 'react-redux';
import { clearState, getAll } from '../../redux/actions.js';



const NameError = () => {

    const dispatch = useDispatch()

    const getOn = () => {
        dispatch(clearState())
        dispatch(getAll())
    }

    return (
        <div className="error-name-content">

            <div>
            <h1>404</h1>
            </div>

            <div>
                <h3>Oops! not found</h3>
            </div>

            <div>
               
                    <a onClick={getOn}><ion-icon name="arrow-undo-circle"></ion-icon> Go back! </a>
                
            </div>
        </div>
    )
}


export default NameError;