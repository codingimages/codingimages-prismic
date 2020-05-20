import React, { Fragment } from "react"

// layout components
import NavigationBar from "../layout/NavigationBar"
import Footer from "../../components/layout/Footer"
import SocialFollow from "../share/SocialFollow"

import "../css/bootstrap.css"

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <SocialFollow />
            <NavigationBar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default MainLayout