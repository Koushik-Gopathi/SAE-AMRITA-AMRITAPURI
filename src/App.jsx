import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader/Loader.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  // No scrolling the page underneath while the loader is playing.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

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
