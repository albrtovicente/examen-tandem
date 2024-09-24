


  import * as React from "react"
import Card from "../componentes/Card"
import { getImage } from 'gatsby-plugin-image';

// import Layout from "../components/layout"

import { graphql } from "gatsby"



const IndexPage = ({data}) => (
  // <Layout>
  <>
  <h1>Inicio</h1>
 
  
  <div className="card-container">
      {data.allTecnologiasJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          
            <Card 
            texto={node.description} 
            imagen={image} 
            
            titulo={node.title}
            link={node.link}
            ></Card>
          
        );
      })}
    </div>
    </>
  // </Layout>
)

export const query = graphql`
 query {
  allTecnologiasJson {
    edges {
      node {
        id
        link
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: WEBP
              width: 300
              aspectRatio: 1.77
            )
          }
        }
        description
      }
    }
  }
}
`;



export default IndexPage



