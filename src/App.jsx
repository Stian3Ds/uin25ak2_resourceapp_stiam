// Importerer de React Router komponentene jeg trenger.
import { Routes, Route, Navigate } from 'react-router-dom'
// Trenger Layout komponenten til hovedoppsettet
import Layout from './components/Layout'
// Trenger Resources så at alle Route kan bli tatt imot
import Resources from './components/Resources'
// Importerer den nye sass filen som har alle designelementene fra AK1
import '../src/styles/style.scss'

// Nettsted oppsettet samlet. Har lagt til React Route - Navigate, slik at nettstedet starter på HTML. Har også lagt til title,
// slik at riktig tittel blir rendret av PageTitle. 
function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/html" title="HTML" />} />
            <Route path="/html" element={<Resources category="html" title="HTML" />} />
            <Route path="/css" element={<Resources category="css" title="CSS" />} />
            <Route path="/javascript" element={<Resources category="javascript" title="JavaScript" />} />
            <Route path="/react" element={<Resources category="react" title="React" />} />
            <Route path="/sanity" element={<Resources category="sanity" title="Sanity and headless CMS" />} />
          </Routes>
        </Layout>
  )
}

export default App
