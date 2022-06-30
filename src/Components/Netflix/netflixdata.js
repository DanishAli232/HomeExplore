import Amovies from "./amovies";
import Netflix from "./netflix";
import './netflixdata.css';


const Netflixdata = (props) => {

    let net = localStorage.getItem("chhs");
    const NetFav = props.search[0].chaange;
    if(NetFav == "netflix"){
    return (
        <div className="cards__details">
            
            {
                props.movies.map(
                    netflix => (
                        <Netflix
                        key= {netflix.id}
                        title= {netflix.title}
                        image= {netflix.image}
                        />
                    )
                )
            }
        </div>
    );
        }else if(NetFav == "Amazon"){
            return (
                <div className="cards__details">
                    
                    {
                        props.movies1.map(
                            netflix => (
                                <Amovies
                                key= {netflix.id}
                                title= {netflix.title}
                                image= {netflix.image}
                                />
                            )
                        )
                    }
                </div>
            );
    
}else{
    return(
        <div>
            <h1>Search Movie</h1>
        </div>
    );
}
}
export default Netflixdata;