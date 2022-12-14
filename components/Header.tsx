import { SearchIcon } from '@heroicons/react/solid' 
import { BellIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
 
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            alt="Netflix-Logo"
            className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className="hidden sm:inline h-6 w-6"/>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6'></BellIcon>
        <Link href="/account">
          <img
              src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
              alt="KidsLogo"
              className="cursor-pointer rounded"
            />
        </Link>
      </div>
       
    </header>
  )
}

export default Header