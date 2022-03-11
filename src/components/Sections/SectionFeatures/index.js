import * as React from 'react'
import SectionFeaturesItem from './item'
import Wrapper from '../../wrapper'
import DroneSvg from '../../../images/svg/drone.svg'
import CommandCenterSvg from '../../../images/svg/command-center.svg'
import ShieldApiSvg from '../../../images/svg/shield-api.svg'
import { GITHUB_URL } from '../../../data/links'

const SectionFeatures = () => (
    <section className={ "bg-bg-dark py-14 sm:py-16 lg:py-20 sm:px-12 md:px-10 lg:px-12 border-y border-dark-gray" }>
        <Wrapper className='px-8'>
            <div className={"sm:grid sm:grid-cols-3 sm:gap-x-6 md:gap-x-12 lg:gap-x-32 xl:gap-x-56 2xl:gap-x-72"}>
                <SectionFeaturesItem
                    title={"Drone"}
                    svgIcon={<DroneSvg />}
                    to={`${GITHUB_URL}/drone`}
                    btnText={"Help needed!"}
                    btnClass={"text-btn-red-text bg-btn-red-bg"}
                >
                    Application to scan the internet for disinformation
                </SectionFeaturesItem>
                <SectionFeaturesItem
                    className={"mt-12 sm:mt-0"}
                    title={"Command Center"}
                    svgIcon={<CommandCenterSvg />}
                    to={"#"}
                    btnText={"Command UI (soon)"}
                    btnClass={"text-btn-dark-blue-text bg-btn-dark-blue-bg"}
                >
                    A platform for content review
                </SectionFeaturesItem>
                <SectionFeaturesItem
                    className={"mt-12 sm:mt-0"}
                    title={"Shield API"}
                    svgIcon={<ShieldApiSvg />}
                    to={"#"}
                    btnText={"Docs (soon)"}
                    // btnClass={"text-btn-blue-text bg-btn-blue-bg"}
                    btnClass={"text-btn-dark-blue-text bg-btn-dark-blue-bg"}
                >
                    <ul className={"list-disc list-outside ml-5"}>
                        <li>
                            API to access domain reports
                        </li>
                        <li>
                            Golang module for article search, scraping and filtering
                        </li>
                    </ul>
                </SectionFeaturesItem>
            </div>
        </Wrapper>
    </section>
)

export default SectionFeatures
