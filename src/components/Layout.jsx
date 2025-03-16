// Importerer komponenten Nav siden den er brukt i header
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'

// Velger metode lært i forelesning. 
export default function Layout({ children }) {
    // Har prøvd å lage oppsettet likt som AK1. Returnerer dette oppsettet når Layout blir kalt, som da er App.jsx
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