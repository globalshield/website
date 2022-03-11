import { Link } from 'gatsby'
import * as React from 'react'
import Wrapper from './wrapper'
import LogoSvg from '../images/svg/logo-2.svg'
import GithubSvg from '../images/svg/github.svg'
import { DONATE_URL, GITHUB_URL } from '../data/links'

const AppFooter = () => (
    <footer className={ 'bg-bg-dark py-14 sm:py-16 md:pb-24 lg:pt-20 lg:pb-36 xl:pb-40' }>
        <Wrapper>
            <div>
                <LogoSvg className={"mx-auto"} />
                <div className={"sm:flex sm:items-center sm:justify-center mt-8"}>
                    <Link
                        to={ DONATE_URL }
                        className={"py-4 px-6 block bg-blue rounded-lg text-center sm:mr-3"}
                    >
                        <span className={"text-sm text-white"}>Donate to Ukraine</span>
                    </Link>
                    <Link
                        to={ GITHUB_URL }
                        className={"flex items-center justify-center py-4 px-6 rounded-lg bg-opacity-10 bg-white mt-6 sm:mt-0 sm:ml-3"}
                    >
                        <GithubSvg className={"w-6 mr-4"} />
                        <span className={"text-sm text-white"}>Contribute</span>
                    </Link>
                </div>
                <div className={"mt-8 text-white text-sm text-center leading-relaxed"}>
                    <p>Made by a joint effort from Ukraine & Lithuania. 2022</p>
                    <p>Slava Ukraini! 🇺🇦</p>
                </div>
            </div>
        </Wrapper>
    </footer>
)

export default AppFooter
