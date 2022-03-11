import * as React from "react"

const Wrapper = ({ children, className = 'px-3' }) => (
    <div className={`container max-w-screen-xl mx-auto ${className}`}>
      { children }
    </div>
)

export default Wrapper
