import React from "react";
import "./Card.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


const Card =({imagen,  titulo, texto})=>{
    
    return(
        <>
            <div className="cardStyle">
                
                <div>
                    <h1 className="titulo">{titulo}</h1>
                    <StaticImage
                      src ={imagen}
                    />
                    {/* <img className="imagen" src={imagen}></img> */}

                    <p className="texto">{texto}</p>
                    <button className="boton">+ Info</button>
                </div>
            </div>
            
        </>
    
    )
}
export default Card