import './pages.css';
import img1 from '../../Images/Daco_4211232.png';
import { Link } from 'react-router-dom';

const Common = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='col-10 mx-auto'>
                    <div className='row vl'>
                <div className="col-lg-6 first">
                    <section>
                    <h1>{props.name} <strong>Danish Online</strong></h1>
                    <h3>I Hope You Got All The Information You Want From This Channel</h3>
                    <Link to = '/services'>
                    <span>{props.link}</span>
                    </Link>
                    </section>
                </div>
                <div className="col-6 second">
                    
                    <img src={img1} className = 'img-fluid animated' alt = 'home-img'></img>
                    
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Common;