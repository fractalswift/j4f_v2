import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  img {
    width: 500px !important;
    height: auto;
  }

  padding-right: 10px;

  iframe {
    height: 500px;
    width: 95%;
  }

  @media (max-width: 1024px) {
    padding-left: 10px;
    padding-right: 30px;
    iframe {
      height: 50vw;
      width: 95%;
    }
  }
`

const Classes = () => {
  const data = useStaticQuery(graphql`
    query ClassesQuery {
      allWordpressPage(filter: { slug: { eq: "breakdanceclasses" } }) {
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
      {/* Server-side rendered so we can set innerHTML */}
      <div style={{ paddingLeft: "5px" }}>
        <h3
          dangerouslySetInnerHTML={{
            __html: data.allWordpressPage.edges[0].node.title,
          }}
        />

        <Page
          dangerouslySetInnerHTML={{
            __html: data.allWordpressPage.edges[0].node.content,
          }}
        ></Page>
      </div>
    </Layout>
  )
}

export default Classes
