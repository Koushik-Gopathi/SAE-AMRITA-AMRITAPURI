import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader/Loader.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Home sits underneath; the loader splits open to reveal it */}
      <Home ready={!loading} />
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>
    </>
  )
}
