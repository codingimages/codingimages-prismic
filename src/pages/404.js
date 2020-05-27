import React from "react"

// layout
import MainLayout from "../components/layout/MainLayout"
import ErrorPageComponent from "../components/layout/ErrorPageComponent"

const NotFoundPage = () => (
  <MainLayout>
    <ErrorPageComponent />
  </MainLayout>
)

export default NotFoundPage
