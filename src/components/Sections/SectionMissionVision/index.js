import * as React from "react"
import Item from "./item"
import Wrapper from "../../wrapper"

const Index = () => (
  <Wrapper>
    <div className={"sm:px-8 md:px-10 lg:px-12"}>
      <Item
        title={"Mission"}
        description={"To objectively monitor and provide information about historically fictional media publishing."}
      />
      <Item
        title={"Vision"}
        description={"We serve the democratic part of the world and were created in an effort to help stop disinformation and propaganda."}
      />
    </div>
  </Wrapper>
)

export default Index
