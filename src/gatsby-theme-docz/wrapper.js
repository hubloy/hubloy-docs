import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>JengaPress</title>
        <link rel="icon"
            type="image/png"
              href="http://example.com/myicon.png"
        />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper