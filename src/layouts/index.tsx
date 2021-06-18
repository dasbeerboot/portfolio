import React, { Suspense } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import './index.scss'
import Header from './Header'
import Footer from './Footer'
import MainPage from '../main'

function MainLayout({ route }: RouteConfig): JSX.Element {
  return (
    <main className="main-layout-container">
      <Header />
      <section className="main-contents-container">
        <MainPage />
      </section>
      <Footer />
    </main>
  )
}

export default MainLayout
