import * as React from 'react'
import Wrapper from '../wrapper'
import Button from '../Button'
import TextBlock from '../TextBlock'
import { MAIL_TO } from '../../data/links'

const SectionAboutUs = () => (
    <section className={ "bg-bg-blue-gray py-14 sm:py-16 lg:py-20" }>
        <Wrapper>
            <div className={"max-w-3xl mx-auto px-6"}>
                <div className={"bg-white rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12"}>
                    <h2 className={"text-4xl text-heading-primary font-semibold text-center"}>About us</h2>
                    <p className={"text-lg text-center my-4"}>
                        We are building tools for Journalists to filter and mark disinformation.
                    </p>
                    <Button to={`mailto:${MAIL_TO}`}>
                        Get in touch
                    </Button>
                    {/* <div className={"text-sm text-center my-4"}>or</div> */}
                    <TextBlock
                        center={true}
                        light
                        copyable
                        className={"text-blue justify-center"}
                        text={MAIL_TO}
                    />
                </div>
            </div>
        </Wrapper>
    </section>
)

export default SectionAboutUs
