import './netflix.css';


const Netflix = (props) => {
    return (
        <div className='col-md-3'>
            <div className='cards'>
            <div className='card'>
                <img src={props.image} className='card__img'></img>
                <div className='card__info'>
                    <span className='card__category'> A Netflix Original Series </span>
                    <h3 className='card__title'>{props.title}</h3>
                    <a href='' target='_blank'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Netflix;