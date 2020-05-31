/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "./layout.css"
import SEO from "./seo"

// my styled components
const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: "Work Sans", Roboto, sans-serif;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 30px;
  background-color: ${props => props.bgColor};
  grid-column: 1;

  @media (max-width: 1024px) {
    // grid-row: 1;
    padding-left: 0px;
    padding-top: 0px;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  a {
    color: black;
    text-decoration: none;
    font-size: 1.728rem;
    line-height: 1.5;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
    color: #3683c2;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0px;
    margin-bottom: 9px;

    a {
      font-size: 1rem;
    }
  }
`

const MainArea = styled.div`
  width: 100%;
  grid-column: 2;

  @media (max-width: 1024px) {
    // background-color: red;
    // grid-row: 2;
    display: flex;
    flex-direction: column;
    height: auto;
  }
`

const Logo = styled(Img)`
  width: 70%;
  margin-left: -10px;
  margin-bottom: 11px;

  @media (max-width: 1024px) {
    margin: auto;
    margin-bottom: 11px;
  }
`

const Glyph = styled(Img)`
  width: 70%;
  margin-left: -10px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    margin: 10px;
    width: 60px;
  }
`

const SocialPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 20vw 0 20vw;
  font-size: 16px;
  grid-column: 2;

  a {
    text-decoration: none;
    color: black;
  }
`

const Layout = ({ children, sideColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }

      allFile(
        filter: {
          name: { in: ["j4flogo", "facebook", "instagram", "youtube"] }
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
    }
  `)

  return (
    <>
      <SEO />
      <a style={{ display: "none" }} href="#main">
        skip to main
      </a>
      <a style={{ display: "none" }} href="#nav">
        skip to navigation
      </a>
      <PageWrapper>
        <Sidebar siteTitle={data.site.siteMetadata.title} bgColor={sideColor}>
          <Link to="/">
            <Logo fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
          </Link>

          <Nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </Nav>
          <SocialPanel>
            <a href="https://instagram.com/just4funkcrew">
              <Glyph
                alt="instagram logo, click to go to just 4 funk instagram"
                fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              />
            </a>
            <a href="https://youtube.com/just4funkproductions">
              <Glyph
                alt="youtube logo, click to go to just 4 funk youtube"
                fluid={data.allFile.edges[3].node.childImageSharp.fluid}
              />
            </a>

            <a href="https://facebook.com/just4funk">
              <Glyph
                alt="facebook logo, click to go to just 4 funk facebook"
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              />
            </a>
          </SocialPanel>
        </Sidebar>
        <main id="main">
          <MainArea>{children}</MainArea>
        </main>
        <Footer>
          <Link to={"/sitemap"}>Sitemap</Link> {"  |  "}
          <Link to={"/privacy-policy-2"}> Privacy Policy</Link>
        </Footer>
      </PageWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
