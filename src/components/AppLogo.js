import * as React from "react"
import { Link } from "gatsby"
import LogoSvg from "../images/svg/logo.svg";

const AppLogo = () => {
    return (
        <Link
            className={"inline-flex flex-col sm:flex-row items-center"}
            to={"/"}
        >
            <LogoSvg className={"w-12 h-12 lg:w-20 lg:h-20 mb-2 sm:mb-0 sm:mr-4"} />
            <span
                className={"text-heading-primary text-lg lg:text-2xl font-semibold"}
            >Global Shield</span>
        </Link>
    )
}

export default AppLogo
