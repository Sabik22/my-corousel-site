import * as React from 'react'
import { graphql } from 'gatsby';
import './mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';
import logo from '../images/outerimages/outer1.jpg';
import image from '../images/outerimages/outer2.jpg';
import picture from '../images/outerimages/outer3.jpg';

const IndexPage = ({data}) => {
  return (
    <body>
      <main>
      <title>React</title>
      <div className="color"></div>
      <div className="absolute">
      <div className="responsive1">
        <div className="container1">

          <div className="clearfix">

        <Carousel>
            {data.slideShow.edges.map(({node}) => (
              <Carousel.Item key = {node.id}>
                <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
              </Carousel.Item> 
          ))}  

        </Carousel>
          </div>

          {/* <img className="svgimg" src={logo}   width="200px" height="200px" />
          <h2>DUMMY TEXT</h2>
          <p>Lorem Ipsum has been the industry's standard.</p>
          </div>

          <div className="clearfix">
          <img className="svgimg" src={image}   width="200px" height="200px" />
          <h2>DUMMY TEXT</h2>
          <p>Lorem Ipsum has been the industry's standard.</p>
          </div>

          <div className="clearfix">
          <img className="svgimg" src={picture}   width="200px" height="200px" />
          <h2>DUMMY TEXT</h2>
          <p>Lorem Ipsum has been the industry's standard.</p>
          </div>

          <div className="clearfix">
          <img className="svgimg" src={photo}   width="200px" height="200px" />
          <h2>DUMMY TEXT</h2>
          <p>Lorem Ipsum has been the industry's standard.</p> 
          </div> */}


        </div>
      </div>
      <div className="responsive2">
        <div className="container2"> <h3>Self Storage</h3><p className="p1">Lorem Ipsum</p>
        <img className="svg" src={logo} />
        </div> 
        <div className="container2"> <h3>Office Storage</h3><p className="p1">Lorem Ipsum</p>
        <img className="svg" src={image} />
        </div>
      </div>
      <div className="responsive2">
        <div className="container2"><h3>Locker</h3><p className="p1">Lorem Ipsum</p>
        <img className="svg" src={picture} />
        </div>
        <div className="container2"> <h3>About Us</h3><p className="p1">Lorem Ipsum</p></div>
      </div>
      </div>
    </main>
    </body>
  )  
}


export default IndexPage

export const pageQuery = graphql`
query {
  slideShow: allFile(
    filter: {relativeDirectory: {eq: "icons"}}
    sort: {fields: base, order: ASC}
  ) {
    edges {
      node {
        id
        base
        childImageSharp {
          gatsbyImageData(
            width: 280
            placeholder: BLURRED
            quality: 70
            blurredOptions: {width: 100}
            transformOptions: {cropFocus: CENTER, fit: COVER}
            height: 280
          )
        }
      }
    }
  }
}
`