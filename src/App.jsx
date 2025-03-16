import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'
import '../src/styles/style.scss'

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
