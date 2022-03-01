import { useState, useEffect } from 'react'

export default function MenuButton ({ link, isMobile, children }) {
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(globalThis.document.location.pathname)
  }, [])

  const isCurrentPage = (link) => {
    if (pathname === link) {
      return true
    }
    return false
  }
  return (

    <a href={link} className={`${isMobile ? 'block py-2' : ''} ${isCurrentPage(link) ? 'aria-current="page"' : ''}`}>{children}</a>

  )
}
