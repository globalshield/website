import * as React from 'react'
import { ABOUT_WAR_URL } from '../../data/links'
import Button from '../Button'
import Wrapper from '../wrapper'

const SectionStandWithUkraine = () => (
    <Wrapper>
        <div className={"bg-white rounded-3xl shadow-xl border border-dark-blue border-opacity-10 p-4 sm:p-6 md:p-8 lg:p-12 sm:flex"}>
            <div className={"aspect-3/2 flex flex-col sm:w-1/2 sm:pr-4"}>
                <div className={"grow bg-flag-blue rounded-t-lg"} />
                <div className={"grow bg-flag-yellow rounded-b-lg"} />
            </div>
            <div className={"mt-12 sm:mt-0 sm:w-1/2 sm:pl-4 sm:flex sm:flex-col sm:justify-center"}>
                <div className={"text-center lg:px-10"}>
                    <div className={"text-4xl lg:text-5xl text-heading-primary font-semibold"}>
                        Stand with Ukraine
                    </div>
                    <p className={"text-lg lg:text-2xl mt-4"}>
                        Europe as well as the rest of the world are with the Ukrainian people.
                    </p>
                    <p className={"text-base md:text-lg mt-8"}>
                        About the war in Ukraine
                    </p>
                    <div className={"mt-4 sm:flex sm:justify-center"}>
                        <Button to={ABOUT_WAR_URL}>
                            Read more
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
)

export default SectionStandWithUkraine
