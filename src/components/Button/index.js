import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, to }) => {
  const mainClass = `
    block py-4 px-6 text-btn-rose-text bg-btn-rose-bg rounded-lg text-center border border-btn-rose-bg
    focus:border-btn-rose-text hover:border-btn-rose-text
  `;

  return (
    <Link
      to={to}
      target={"_blank"}
      className={mainClass}
    >
      {children}
    </Link>
  )
}

export default Button
