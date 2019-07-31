import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      (identity.user.user_metadata.name ||
        identity.user.user_metadata.full_name)) ||
    "NoName"

  console.log({ identity })
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <nav style={{ background: "green" }}>
        {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  )
}

export default function Home() {
  return (
    <main>
      <h1> hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        maiores. Dolorem in corrupti ab molestias nostrum voluptate praesentium
        veritatis doloremque maxime non amet sequi harum neque iste commodi,
        odio minus.
      </p>
      <Layout />
    </main>
  )
}
