import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Page = styled.div`
  width: 90%;
  margin-top: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`

const News = () => {
  const data = useStaticQuery(graphql`
    query SitemapQuery {
      allWordpressPage(
        filter: { path: { nin: ["/home/", "/photos/", "/resources/"] } }
      ) {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>All pages</h1>
      {data.allWordpressPage.edges.map(node => {
        return (
          <Page>
            <Link to={`/${node.node.path}`}>{node.node.title}</Link>
          </Page>
        )
      })}
    </Layout>
  )
}

export default News
