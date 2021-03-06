import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const NewsFeed = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

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
            id
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

      <NewsFeed>
        {data.allWordpressPost.edges.map(node => {
          return (
            <NewsItem key={node.node.id}>
              <h2>{node.node.date}</h2>

              <h3>{node.node.title}</h3>

              <p dangerouslySetInnerHTML={{ __html: node.node.excerpt }}></p>

              <ReadMore to={`/post/${node.node.slug}`}>Read more...</ReadMore>
            </NewsItem>
          )
        })}
      </NewsFeed>
    </Layout>
  )
}

export default News
