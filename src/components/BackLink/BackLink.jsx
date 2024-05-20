/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BackLink({to, children}) {
  return (
      <Link to={to} className="p-2 mb-2 inline-flex rounded bg-green-300 hover:bg-green-400" >{children}</Link>
  )
}
