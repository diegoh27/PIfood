import './error.css'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='section_error'>
            <div className='content-error'>

            
            <div>
            <h1 className='title-error'>404</h1>
            </div>

            <div>
                <h3>Oops! page not found</h3>
            </div>
            <div>
            <p>Sorry. but the page you are looking for does not exist</p>
            </div>

            <div>
                <Link to='/'>
                    <a><ion-icon name="arrow-undo-circle"></ion-icon> Go back! </a>
                </Link>
            </div>

            </div>
        </div>
    )
}


export default Error;