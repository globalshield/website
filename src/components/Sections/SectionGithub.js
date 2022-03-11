import * as React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../wrapper'
import GithubIcon from '../../images/svg/github.svg'
import { GITHUB_URL } from '../../data/links'

const SectionGithub = () => (
    <section className={ "bg-bg-dark py-14 sm:py-16 lg:py-20 sm:px-8 md:px-10 lg:px-12" }>
        <Wrapper>
            <div className={"sm:flex sm:items-center"}>
                <div className={ 'text-center sm:text-left text-white sm:mr-6 sm:flex-1' }>
                    <h2 className="text-4xl lg:text-5xl">SDK & Toolkit</h2>
                    <p className="mt-4 lg:text-lg">
                        We are open-source.
                    </p>
                </div>
                <div className={ 'mt-6 sm:mt-0 sm:ml-6 sm:flex-1' }>
                    <Link to={ GITHUB_URL } target={ '_blank' }>
                        <span className={ 'inline-block w-full px-10 py-12 sm:py-16 lg:py-20 bg-opacity-10 bg-white rounded-3xl' }>
                            <div className={ 'flex items-center justify-center mx-auto' }>
                                <GithubIcon className={ 'w-8 mr-4' } />
                                <div className="text-white lg:text-lg">
                                    Contribute on Github
                                </div>
                            </div>
                        </span>
                    </Link>
                </div>
            </div>
        </Wrapper>
    </section>
)

export default SectionGithub
