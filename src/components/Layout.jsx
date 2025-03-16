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
                <PageTitle />
                {children}
            </article>
        </main>
        </>
    )
}