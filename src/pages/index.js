import { Link } from "gatsby"
import * as React from "react"
import Card from "../componentes/Card"





const Inicio = () => {
  
  return (
    <>
      <div className="container">
        <h1 style={{textAlign: `center`}}>Inicio</h1> 
      <div >
        <Link to="../contacto" style={{textAlign:`center`, fontSize:`34px`, textDecoration:`none`}}>
          <p className="linkContacto">Contacto</p>
        </Link>
      </div>
      <div className="cards" style={{textAlign:`center`}}>
        <Card 
          titulo="Gatsby"
          imagen="../images/figma.jpg"
          texto="dsvjdhbfbcscbhsb"
        />
        <Card
          titulo="Gatsby"
          imagen="../images/figma.jpg"
          texto="dsvjdhbfbcscbhsb"
        />
        <Card
          titulo="Gatsby"
          imagen="../images/figma.jpg"
          texto="dsvjdhbfbcscbhsb"
        />
      </div>
      </div>
        

    </>
    
  )
}
  
  export default Inicio