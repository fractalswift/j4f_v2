// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
// import { Helmet } from "react-helmet"
// import Img from "gatsby-image"

// import theme from "../../mediaQueries"

// // my styled components
// const PageWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   font-family: "Work Sans", Roboto, sans-serif;
//   @media (max-width: ${theme.breakpoints[4]}) {
//     grid-template-columns: ${theme.sidebarWidth.normal} 1fr;
//   }
//   @media (max-width: ${theme.breakpoints[2]}) {
//     grid-template-columns: 1fr;
//   }
// `

// const Sidebar = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding-left: 50px;
//   padding-top: 30px;
//   background-color: ${props => props.bgColor};

//   @media (max-width: ${theme.breakpoints[4]}) {
//     width: ${theme.sidebarWidth.normal};
//   }
//   @media (max-width: ${theme.breakpoints[2]}) {
//     position: relative;
//     width: 100%;
//   }
// `

// const Nav = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 30px;
//   a {
//     color: black;
//     text-decoration: none;
//     font-size: 1.728rem;
//     line-height: 1.5;
//     font-weight: 400;
//     transition: all 0.2s ease-in-out;
//   }

//   a:hover {
//     transform: scale(1.1);
//     color: #3683c2;
//   }

//   @media (max-width: ${theme.breakpoints[2]}) {
//     font-size: ${theme.fontSizes[2]};
//     margin-left: ${theme.space[4]};
//   }
//   @media (max-width: ${theme.breakpoints[1]}) {
//     font-size: ${theme.fontSizes[1]};
//     margin-left: ${theme.space[3]};
//   }
//   @media (max-width: ${theme.breakpoints[0]}) {
//     font-size: ${theme.fontSizes[0]};
//     margin-left: ${theme.space[2]};
//   }
// `

// const MainArea = styled.div`
//   width: 100%;
// `

// // Change alignment once I have a new logo
// const Logo = styled(Img)`
//   width: 70%;
//   margin-left: -10px;
// `

// const SocialArea = styled.div`
//   width: 100%;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   margin-left: -45px;

//   a {
//     text-align: left;
//   }

//   @media (max-width: ${theme.breakpoints[1]}) {
//     flex-direction: row;
//     top: 0px;
//     position: absolute;
//   }
// `

// const SocialIcon = styled.img`
//   width: ${props => props.width};
//   margin-top: ${props => props.marginTop};
//   margin-left: ${props => props.marginLeft};
//   transition: all 0.2s ease-in-out;

//   :hover {
//     transform: scale(1.1);
//   }

//   @media (max-width: ${theme.breakpoints[1]}) {
//     width: 30px;
//   }
// `

// const SocialButton = styled(Img)``

// const Footer = styled.footer`
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   font-size: 16px;

//   a {
//     text-decoration: none;
//     color: black;
//   }
// `

// const Layout = ({ children, sideColor }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery2 {
//       site {
//         siteMetadata {
//           title
//         }
//       }

//       allWordpressWpMedia(
//         filter: {
//           title: {
//             in: [
//               "j4f_breakdance_logo"
//               "instagram_logo"
//               "facebook_logo"
//               "youtube_icon"
//             ]
//           }
//         }
//       ) {
//         edges {
//           node {
//             id
//             source_url
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 200, quality: 95) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Just 4 Funk</title>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap"
//           rel="stylesheet"
//         />
//       </Helmet>
//       <PageWrapper>
//         <Sidebar siteTitle={data.site.siteMetadata.title} bgColor={sideColor}>
//           <Link to="/home">
//             <Logo
//               fluid={
//                 data.allWordpressWpMedia.edges[2].node.localFile.childImageSharp
//                   .fluid
//               }
//             />
//           </Link>

//           <Nav>
//             <Link to="/home">Home</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/about">About</Link>
//           </Nav>

//           <SocialArea>
//             <a href="https://instagram.com/just4funkcrew">
//               <SocialIcon
//                 width="100%"
//                 src={data.allWordpressWpMedia.edges[1].node.source_url}
//               />
//             </a>

//             <a href="https://youtube.com/just4funkproductions">
//               <SocialIcon
//                 marginLeft="40px"
//                 width="70%"
//                 src={data.allWordpressWpMedia.edges[3].node.source_url}
//               />
//             </a>
//             <a href="https://facebook.com/just4funk">
//               <SocialIcon
//                 width="75%"
//                 marginLeft="35px"
//                 marginTop="30px"
//                 src={data.allWordpressWpMedia.edges[0].node.source_url}
//               />
//             </a>
//           </SocialArea>

//           <Footer>
//             <Link to={"/sitemap"}>Sitemap</Link>
//             <Link to={"/privacy-policy-2"}>Privacy Policy</Link>
//           </Footer>
//         </Sidebar>
//         <MainArea>{children}</MainArea>
//       </PageWrapper>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

// =====

// @media (max-width: ${theme.breakpoints[3]}) {
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: 35vw 30vw 30vw 25vw;
//   grid-template-areas:
//     "first-project first-project about-us about-us"
//     "three-projects three-projects three-projects three-projects"
//     "three-projects three-projects three-projects three-projects"
//     "instagram instagram instagram instagram";
// }
// @media (max-width: ${theme.breakpoints[1]}) {
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(5, 38vw);
//   grid-template-areas:
//     "first-project about-us"
//     "three-projects three-projects"
//     "three-projects three-projects"
//     "three-projects three-projects"
//     "instagram instagram";
// }
// @media (max-width: ${theme.breakpoints[0]}) {
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 50vw);
//   grid-template-areas:
//     "first-project"
//     "about-us"
//     "three-projects"
//     "three-projects"
//     "three-projects"
//     "instagram";
// }
