import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'  // Add this import

function App() {
  const [] = useState(0)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ]

  return (
    <>
      <Header title="Benjamin Arthur Devera" links={navLinks} />  {/* Add here */}
      <h1>Benjamin Arthur Devera</h1>
      <p>This is a website I made to showcase myself and my projects</p>
    </>
  )
}

export default App