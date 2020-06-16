import React from "react"
import renderer from "react-test-renderer"

import GridItem from "../GridItem"

describe("GridItem", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GridItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
