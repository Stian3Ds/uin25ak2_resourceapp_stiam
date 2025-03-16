// importerer NavLink komponenten fra React Router. Denne blir rendret som en <a> tag på nettsiden:
// https://medium.com/@alexanie_/navlink-component-in-react-router-b83f4a11794f
import { NavLink } from "react-router-dom"


export default function Nav() {
    // Variabel som inneholder en array med forskjellige URL extensions, som blir lagt til når man trykker navigering. Har også
    // med label, som jeg bruker senere til PageTitle oppsettet
    const navArray = [
        {path: '/html', label: 'HTML' },
        {path: '/css', label: 'CSS' },
        {path: '/javascript', label: 'JavaScript' },
        {path: '/react', label: 'React' },
        {path: '/sanity', label: 'Sanity and headless CMS' },
    ]

    return (
        // Lager liste på arrayen som er over
        <nav>
            {navArray.map(item => (
                <NavLink key={item.path} to={item.path} className={({ isActive}) => isActive ? 'active button-script' : 'button-script' } >
                    {item.label}
                </NavLink>
            ) )}

        </nav>
    )
}