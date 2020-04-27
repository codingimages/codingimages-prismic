import React, { Fragment } from "react"

// layout components
import NavigationBar from "../layout/NavigationBar"
import Footer from "../../components/layout/Footer"

import "../css/bootstrap.css"

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <NavigationBar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default MainLayout