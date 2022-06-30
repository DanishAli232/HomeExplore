import { Link } from "react-router-dom";
import './nav.css';

const Nav2 = () => {
  return (
    <div className="container-fluid nav-bg" >
      <div className="row">
        <div className="col-10 mx-auto">

          <nav className="navbar navbar-expand-lg1 navbar-dark bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mx-auto mb-lg-0">
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} className="nav-link active" to='/dining'>Kitchen and Dining</Link>
                  </li>
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} className="nav-link active" to='/furniture'>Furniture</Link>
                  </li>
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} className="nav-link active" to='/appliances'>Kitchen Appliances</Link>
                  </li>
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} activeclassname="active_class" className="nav-link active" to='/supplies'>HouseHold Supplies</Link>
                  </li>
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} activeclassname="active_class" className="nav-link active" to='/lighting'>Lighting</Link>
                  </li>
                  <li className="nav-item">
                    <Link style = {{margin: '1px 27px'}} activeclassname="active_class" className="nav-link active" to='/furnishing'>Home Furnishing</Link>
                  </li> 

                </ul>
                
              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default Nav2;