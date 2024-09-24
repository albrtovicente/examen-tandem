import { Link } from "gatsby"
import * as React from "react"
import Card from "../componentes/Card"
import './page.css'





const Inicio = () => {
  
  return (
    <>
      <div className="container">
        <h1 style={{textAlign: `center`}}>Inicio</h1> 
      <div >
        <Link to="../contacto" >
          <p className="link">Contacto</p>
        </Link>
      </div>
      <div className="cards">
        <Card 
          titulo="Gatsby"
          imagen="../images/gatsby.jpg"
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