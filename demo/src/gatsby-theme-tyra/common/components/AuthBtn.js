import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

export default function AuthBtn() {
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
      {isLoggedIn && `Welcome ${name}`}
      <button
        onClick={() => setDialog(true)}
        className="sans-serif ttu light-red f5 no-underline dn dib-l"
      >
        {isLoggedIn ? "LOG OUT" : "SIGN UP/LOGIN"}
      </button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  )
}
