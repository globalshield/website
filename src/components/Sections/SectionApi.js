import * as React from 'react'
import Wrapper from '../wrapper'
import TextBlock from '../TextBlock'

const SectionApi = () => (
    <section className={ "bg-bg-dark py-14 sm:py-16 lg:py-20" }>
        <Wrapper>
            <div className={"max-w-3xl mx-auto px-6"}>
                <div>
                    <h3 className={"text-white text-2xl font-semibold"}>
                        API endpoints <small>(soon)</small>:
                    </h3>
                    <p className={"text-sm mt-4 text-white mb-4"}>
                        Developers need to be able to plug in our information into their apps.
                    </p>
                    <TextBlock
                        text={"https://api.ru.globalshield.io/domains.[json|csv|toml]"}
                    />
                    <TextBlock
                        copyable
                        text={"https://api.ru.globalshield.io/domains/score.[json|csv|toml]"}
                    />
                </div>
                {/* <div className={"mt-12"}>
                    <h3 className={"text-white text-2xl font-semibold"}>
                        Proxies / mirrors:
                    </h3>
                    <p className={"text-sm mt-4 text-white mb-4"}>
                        Dynamically changing custom domains proxying our APIs.
                    </p>
                    <TextBlock text={"https://something-1u2b3.mirror.com"} />
                    <TextBlock text={"https://123s-3213da.dodgysite.com"} />
                    <TextBlock text={"https://qweqw.123aa.ru"} />
                </div> */}
            </div>
        </Wrapper>
    </section>
)

export default SectionApi
