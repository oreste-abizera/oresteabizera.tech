import React from "react"
import { FaTimes } from "react-icons/fa"

export default function TopBanner() {
  const [isShown, setIsShown] = React.useState(true)
  const toggleIsShown = () => {
    setIsShown(!isShown)
  }
  if (!isShown) {
    return <></>
  }
  return (
    <div
      style={{
        width: "100%",
        height: "3rem",
        backgroundColor: "var(--mainBlack)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        padding: "0.5rem",
      }}
    >
      <div></div>
      <p>
        I released a new npm module,{" "}
        <a
          style={{ color: "#fff" }}
          href="https://www.npmjs.com/package/string-method"
          target="blank"
        >
          Check it out.
        </a>
      </p>
      <FaTimes onClick={toggleIsShown} style={{ cursor: "pointer" }}></FaTimes>
    </div>
  )
}
