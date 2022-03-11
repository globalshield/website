import * as React from 'react'
import { Link } from 'gatsby'
// import GithubIcon from '../../../images/svg/github.svg'

const SectionFeaturesItem = ({ title, children, svgIcon, btnClass, btnText, to, className = '' }) => {
    const btnClassName = `inline-block p-4 px-6 rounded-md text-center mt-4 ${btnClass}`;
    const classNameMain = `sm:flex-1 ${className}`

    return (
        <div className={classNameMain}>
            <div>
                {svgIcon}
            </div>
            <div>
                <span className={"block h-px w-full bg-white opacity-10 my-4"} />
                <h3 className={"text-lg text-heading-light font-semibold"}>
                    {title}
                </h3>
                <div className={"text-white text-sm mt-4 leading-relaxed"}>
                    {children}
                </div>
                {to == "#" ? (<div className={btnClassName}>{btnText}</div>) :
                    <Link
                        to={to}
                        target="_blank"
                        className={btnClassName}
                    >
                        {btnText}
                    </Link>
                }
            </div>
        </div>
    )
};

export default SectionFeaturesItem
