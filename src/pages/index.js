import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"
import Layout from "../components/layout"
import GridItem from "../components/GridItem"

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

    grid-template-rows: 70vw 70vw 210vw auto;



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

const Index = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const data = useStaticQuery(graphql`
    query HomeQuery {
      desktop: allFile(
        filter: {
          name: {
            in: [
              "breakdance_classes"
              "breakdance_news"
              "breakdance_shows"
              "breakdance_videos"
              "breakdance_workshops"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            id
            slug
            title
            content
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
            alt="picture of just 4 funk breakdance workshop"
            key={data.desktop.edges[4].node.id}
            fluid={data.desktop.edges[4].node.childImageSharp.fluid}
          />
          <span>Workshops</span>
        </FirstProject>
        <AboutUs to={"/shows"}>
          <Img
            alt="picture of just 4 funk after a breakdance show"
            fluid={data.desktop.edges[2].node.childImageSharp.fluid}
          />
          <span>Shows</span>
        </AboutUs>
        <ThreeProjects>
          <GridItem to={"/breakdance_classes"}>
            <Img
              alt="picture of just 4 funk after a breakdance class"
              fluid={data.desktop.edges[0].node.childImageSharp.fluid}
            />
            <span>Classes</span>
          </GridItem>
          <GridItem to={"/videos-breakdance"}>
            <Img
              alt="picture of fin fromjust 4 funk, click to go to videos"
              fluid={data.desktop.edges[3].node.childImageSharp.fluid}
            />
            <span>Videos</span>
          </GridItem>
          <GridItem to={"/news"}>
            <Img
              alt="picture of suga rush jumping in the air, click to go to news"
              fluid={data.desktop.edges[1].node.childImageSharp.fluid}
            />
            <span>News</span>
          </GridItem>
        </ThreeProjects>
        <HomeInfo>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allWordpressPage.edges[0].node.content,
            }}
          />
        </HomeInfo>
      </Area>
    </Layout>
  )
}

export default Index
