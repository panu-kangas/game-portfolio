import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
		<Header />

    <main className="flex-grow">
		<ScrollToTop>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</ScrollToTop>

    </main>

      <Footer />
    </div>
  )
}

export default App
