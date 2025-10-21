import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navLinkClasses = (path: string) =>
    `px-4 py-2 rounded-md transition-colors duration-200 ${
      location.pathname === path
        ? 'bg-green-500 text-black'
        : 'text-white hover:text-green-400'
    }`

  return (
    <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div>
			<Link to="/">
				<h1 className="text-3xl font-bold text-green-500 cursor-pointer">Panu Kangas</h1>
				<p className="text-sm text-gray-400 cursor-pointer">
					Blending creativity and code to build something fun
				</p>
			</Link>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-4">
          <Link to="/" className={navLinkClasses('/')}>
            Home
          </Link>
          <Link to="/gallery" className={navLinkClasses('/gallery')}>
            Game Gallery
          </Link>
          <Link to="/about" className={navLinkClasses('/about')}>
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header