// import './pages.css';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';
import img5 from '../../Images/img5.jpg';
import img6 from '../../Images/img6.jpg';

const Services = () => {
    return (
        <div className='container-fluid mt-4'>
            <div className="row">

                <div className='col-10 mx-auto'>
                    <div className='row gy-3'>
                        <div className='col-4'>
                            <div className="card">
                                <img src={img1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card">
                                <img src={img3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card">
                                <img src={img4} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card">
                                <img src={img5} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card">
                                <img src={img6} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>

                    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;