import { useState, useEffect, useCallback } from 'react'

const Card =({pelicula})=>{
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    return(
        
        <>
        <div className="card" style={{width: "18rem"}} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        <img src={pelicula.images.posterArt.url} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text">{pelicula.title}</p>
            </div>
            {isHover ? <div>{pelicula.description}</div> : null}
        </div>
        </>
        
    )
}

export default Card