import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'
import '../src/styles/style.scss'

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/html" element={<Resources category="HTML" />} />
            <Route path="/css" element={<Resources category="CSS" />} />
            <Route path="/javascript" element={<Resources category="JavaScript" />} />
            <Route path="/react" element={<Resources category="React" />} />
            <Route path="/sanity" element={<Resources category="Sanity and headless CMS" />} />
            <Route path="*" element={<Resources category="HTML" />} />
          </Routes>
        </Layout>
  )
}

export default App
