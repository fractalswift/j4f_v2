import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"
import Layout from "../components/layout"
import GridItem from "../components/GridItem"
import SEO from "../components/SEO"

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw auto;
  grid-template-areas:
    "first-project shows shows"
    "three-projects three-projects three-projects"
    "homeinfo homeinfo homeinfo";
   

  @media (max-width: 1024px) {
    display:grid;

    grid-template-rows: 35vw 35vw  120vw auto;



    grid-template-areas:
    
    "shows"
    "first-project"
    "three-projects"
    "homeinfo";



  
`

const FirstProject = styled(GridItem)`
  grid-area: first-project;
  span {
    font-size: 30px;
  }

  @media (max-width: 1024px) {
   max-width:100vw;

`

const AboutUs = styled(GridItem)`
  grid-area: shows;
  @media (max-width: 1024px) {
    max-width:100vw;
 
`

const ThreeProjects = styled.div`
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-area: three-projects;
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
  }
`

const HomeInfo = styled.div`
  grid-area: homeinfo;
  padding: 8px 8px;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 8vw;
  }
`

export default ({ pageContext }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const data = useStaticQuery(graphql`
    query HomeQuery {
      allWordpressWpMedia(
        filter: {
          title: {
            in: ["breakdance_shows", "videos", "news", "classes", "workshops"]
          }
        }
      ) {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 95) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout sideColor="white">
      <Area style={pageAnimation}>
        <FirstProject
          to={"/dance-workshops-for-schools-youth-clubs-organisations"}
        >
          <Img
            key={
              data.allWordpressWpMedia.edges[4].node.localFile.childImageSharp
                .id
            }
            fluid={
              data.allWordpressWpMedia.edges[4].node.localFile.childImageSharp
                .fluid
            }
          />
          <span>Workshops</span>
        </FirstProject>
        <AboutUs to={"/shows"}>
          <Img
            fluid={
              data.allWordpressWpMedia.edges[0].node.localFile.childImageSharp
                .fluid
            }
          />
          <span>Shows</span>
        </AboutUs>
        <ThreeProjects>
          <GridItem to={"/breakdanceclasses"}>
            <Img
              fluid={
                data.allWordpressWpMedia.edges[1].node.localFile.childImageSharp
                  .fluid
              }
            />
            <span>Classes</span>
          </GridItem>
          <GridItem to={"/videos-breakdance"}>
            <Img
              fluid={
                data.allWordpressWpMedia.edges[2].node.localFile.childImageSharp
                  .fluid
              }
            />
            <span>Videos</span>
          </GridItem>
          <GridItem to={"/news"}>
            <Img
              fluid={
                data.allWordpressWpMedia.edges[3].node.localFile.childImageSharp
                  .fluid
              }
            />
            <span>News</span>
          </GridItem>
        </ThreeProjects>
        <HomeInfo>
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </HomeInfo>
      </Area>
    </Layout>
  )
}
