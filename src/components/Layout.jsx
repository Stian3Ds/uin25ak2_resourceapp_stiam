import React from "react"
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'

export default function Layout({ children }) {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
            <PageTitle />
            {children}
        </main>
        </>
    )
}