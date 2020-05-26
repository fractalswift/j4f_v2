import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <strong>
        Website url:{" "}
        <a
          href={pageContext.acf.portfolio_url}
          target="_blank"
          rel="noreferrer"
        >
          {pageContext.acf.portfolio_url}
        </a>
      </strong>
      <div>
        <FeaturedImage src={pageContext.featured_media.source_url} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}
