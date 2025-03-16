import { NavLink } from "react-router-dom"


export default function Nav() {
    const navArray = [
        {path: '/html', label: 'HTML' },
        {path: '/css', label: 'CSS' },
        {path: '/javascript', label: 'JavaScript' },
        {path: '/react', label: 'React' },
        {path: '/sanity', label: 'Sanity and headless CMS' },
    ]

    return (
        <nav>
            {navArray.map(item => (
                <NavLink key={item.path} to={item.path} className={({ isActive}) => isActive ? 'active button-script' : 'button-script' } >
                    {item.label}
                </NavLink>
            ) )}

        </nav>
    )
}