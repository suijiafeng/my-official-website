import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > 100) {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品', href: '/products' },
    { name: '关于我们', href: '/about' },
    { name: '最新动态', href: '/news' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="flex-shrink-0">
                  <span className="text-indigo-600 font-bold text-2xl">MyCompany</span>
                </span>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === item.href
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-700 hover:bg-indigo-500 hover:text-white'
                      } transition duration-300`}>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === item.href
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-indigo-500 hover:text-white'
                    } transition duration-300`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  )
}

export default Navbar