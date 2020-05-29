/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import theme from "../../mediaQueries"

// my styled components
const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: "Work Sans", Roboto, sans-serif;

  @media (max-width: ${theme.breakpoints[1]}) {
    // grid-template-columns: 1fr;
    // grid-template-rows: 1fr 1fr 1fr 1fr;
    // justify-items: center;
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

  @media (max-width: ${theme.breakpoints[1]}) {
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

  @media (max-width: ${theme.breakpoints[1]}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0px;

    a {
      font-size: 1rem;
    }
  }
`

const MainArea = styled.div`
  width: 100%;
  grid-column: 2;

  @media (max-width: ${theme.breakpoints[1]}) {
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

  @media (max-width: ${theme.breakpoints[1]}) {
    margin: auto;
  }
`

const SocialArea = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -45px;

  a {
    text-align: left;
  }

  @media (max-width: ${theme.breakpoints[1]}) {
    margin-left: 1px;
    margin-top: 1px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0, 212, 255, 0.4) 20%,
      rgba(251, 145, 52, 0.5) 100%
    );
  }
`

const SocialIcon = styled.img`
  width: ${props => props.width};
  margin-left: ${props => props.marginLeft};
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints[1]}) {
    width: 80px;

    margin-top: 7px;
  }
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

      allWordpressWpMedia(
        filter: {
          title: {
            in: [
              "j4f_breakdance_logo"
              "instagram_logo"
              "facebook_logo"
              "youtube_icon"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, quality: 95) {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Just 4 Funk</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PageWrapper>
        <Sidebar siteTitle={data.site.siteMetadata.title} bgColor={sideColor}>
          <Link to="/home">
            <Logo
              fluid={
                data.allWordpressWpMedia.edges[2].node.localFile.childImageSharp
                  .fluid
              }
            />
          </Link>

          <Nav>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </Nav>

          <SocialArea>
            <a href="https://instagram.com/just4funkcrew">
              <SocialIcon
                width="100%"
                src={data.allWordpressWpMedia.edges[1].node.source_url}
              />
            </a>
            <a href="https://youtube.com/just4funkproductions">
              <SocialIcon
                src={data.allWordpressWpMedia.edges[3].node.source_url}
              />
            </a>

            <a href="https://facebook.com/just4funk">
              <SocialIcon
                marginTop="30px"
                src={data.allWordpressWpMedia.edges[0].node.source_url}
              />
            </a>
          </SocialArea>
        </Sidebar>
        <MainArea>{children}</MainArea>
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
