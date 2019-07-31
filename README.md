# Gatsby Theme Netlify Identity

This repo is a yarn workspace.

## How to Use In Your Gatsby App

> ⚠️ Make sure to enable Netlify Identity on your site!

this theme adds `gatsby-plugin-netlity-identity` for you and ships some nice components!

```bash
yarn add gatsby-theme-netlify-identity
```

And add it to your config:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-theme-netlify-identity`,
      options: {
        url: `https://your-netlify-identity-instance-here.netlify.com/`, // required! Make sure Identity is enabled!
      },
    },
  ],
}
```

Now you can use `IdentityModal` and `useIdentityContext` in your application!

```js
import React from 'react'
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      (identity.user.user_metadata.name || identity.user.user_metadata.full_name)) ||
    'NoName'

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <nav style={{ background: 'green' }}>
        {' '}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : 'LOG IN'}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </>
  )
}

export default Layout
```

## Local Development

```sh
yarn workspace demo develop
```

The demo will start at http://localhost:8000

**NOTE:** If you’re new to Yarn workspaces, check out [this post](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) for details.
