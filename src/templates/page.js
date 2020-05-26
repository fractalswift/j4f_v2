import React from "react"
import Layout from "../components/layout2"
import styled from "styled-components"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  img {
    width: 500px !important;
    height: auto;
  }
`

export default ({ pageContext }) => {
  return (
    <Layout>
      {/* Server-side rendered so we can set innerHTML */}
      <h3 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

      <Page dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}
