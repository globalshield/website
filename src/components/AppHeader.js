import * as React from "react"
import { DONATE_URL } from "../data/links"
import AppLogo from "./AppLogo"
import Button from "./Button"
import Wrapper from "./wrapper"

const AppHeader = () => (
  <header className={"bg-white border-b border-bg-blue-gray"}>
    <Wrapper>
      <div className={"py-6 lg:py-12 sm:flex sm:items-center sm:justify-between text-center"}>
        <AppLogo />
        <div className={"flex flex-col items-center"}>
          <div className={"mt-6 sm:mt-0 w-full"}>
            <Button to={DONATE_URL}>Donate to Ukraine</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  </header>
)

export default AppHeader
