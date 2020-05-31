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

        <Page>
          <p>Are you serious about learning breaking (breakdance)?</p>

          <p>Do you just want to try something new?</p>

          <p>
            Our classes are unique in Exeter because we teach authentic breaking
            (breakdance) only. When you come to our class you can expect to
            leave with the real foundations of this amazing dance style. We
            teach tricks and spins as well as the important foundation of
            Toprock, Footwork, Freezes and Powermoves.
          </p>

          <p>
            We also run sessions at a number of after school clubs and youth
            clubs around the South West.
          </p>

          <p>
            Please contact us if you would like to have us in for workshops or
            regular classes at your school or organisation.
          </p>

          <p>
            Age range: We take anyone from 7 up including teenagers and adults.
            Please note though the classes are fun, you will be worked HARD!
            Come with the right attitude and you will improve fast.
          </p>

          <p>
            Please note we do not currently run classes for under 7s. We do
            occasionally run or teach at events where under 7s can come and
            learn some breaking – to find out about these, join our mailing list
            (to the right). Another option is to speak to your school about
            booking us for a workshop.
          </p>

          <p>
            Your first class is free. After that we ask you to pay by monthly
            direct debit:
          </p>
          <p>Come to one class per week: £23 per month (approx £5/class)</p>
          <p>
            There is NO joining fee and NO minimum contract length (you just pay
            month by month).{" "}
          </p>

          <p>Term dates:</p>

          <p>
            Our breakdance classes follow the same calendar as Devon school
            terms. Classes run all year round aside from school holidays.
          </p>
        </Page>
      </div>
    </Layout>
  )
}

export default Classes
