import { Link } from "gatsby"
import * as React from "react"
import Card from "../componentes/Card"





const Inicio = () => {
  
    return (
      <>
        
         <h1 style={{textAlign: `center`}}>Inicio</h1> 

         <Link to="../contacto">
           Contacto
         </Link>
         <Card
            titulo="Gatsby"
            imagen="../images/figma.jpg"
            texto="dsvjdhbfbcscbhsb"
         />
  
          
  
      </>
      
    )
  }
  
  export default Inicio