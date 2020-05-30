import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const NewsItem = styled.div`
  width: 90%;
  border: 1px solid grey;
  margin-top: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`

const ReadMore = styled(Link)`
  text-align: right;
`

const News = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allWordpressPost {
        edges {
          node {
            title
            date(formatString: "Do MMM YYYY")
            excerpt
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>News</h1>
      {data.allWordpressPost.edges.map(node => {
        return (
          <NewsItem>
            <h2>{node.node.date}</h2>

            <h3>{node.node.title}</h3>

            <p dangerouslySetInnerHTML={{ __html: node.node.excerpt }}></p>

            <ReadMore to={`/post/${node.node.slug}`}>Read more...</ReadMore>
          </NewsItem>
        )
      })}
    </Layout>
  )
}

export default News
