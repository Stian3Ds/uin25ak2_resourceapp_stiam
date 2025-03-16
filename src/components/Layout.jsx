import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'

export default function Layout({ children }) {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
            <article>
                {children}
            </article>
        </main>
        </>
    )
}