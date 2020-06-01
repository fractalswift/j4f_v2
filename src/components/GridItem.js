import styled from "styled-components"
import { Link } from "gatsby"

const GridItem = styled(Link)`
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  > span {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    text-align: right;
    font-weight: 700;
    font-size: 1.875rem;
    padding: 1.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  > p {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: right;
    font-weight: 300;
    font-size: 1.074rem;
    padding: 1.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    width: 100vw;
    span {
      font-size: 5vh;
    }
  }
`

export default GridItem
