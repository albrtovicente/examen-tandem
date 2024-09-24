import React from "react";
import "./Card.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const Card =({imagen,  titulo, texto, link})=>{
    
    return(
        <>
            <div className="cardStyle">
                
                <div>
                    <h1 className="titulo">{titulo}</h1>
                    {/* <StaticImage
                      src ={imagen}
                    /> */}
                    <GatsbyImage image={imagen}/> 

                    <p className="texto">{texto}</p>
                    <button className="boton">
                        <Link to={link} className="link">
                        + Info
                        </Link>
                    </button>
                    
                     
                     
                     
                </div>
            </div>
            
        </>
    
    )
}
export default Card