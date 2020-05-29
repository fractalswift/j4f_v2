import React from "react"
import Layout from "../components/layout2"
import styled from "styled-components"
import theme from "../../mediaQueries"

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

  @media (max-width: ${theme.breakpoints[1]}) {
    padding-left: 10px;
    padding-right: 30px;
    iframe {
      height: 50vw;
      width: 95%;
    }
  }
`

export default ({ pageContext }) => {
  return (
    <Layout sideColor="white">
      {/* Server-side rendered so we can set innerHTML */}
      <div style={{ paddingLeft: "5px" }}>
        <h3 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

        <Page dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </Layout>
  )
}
