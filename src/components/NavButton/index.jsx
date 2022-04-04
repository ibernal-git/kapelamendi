
import db from '../../data/db.json'
export default function MenuButton ({ link, menuActive, title, isMobile, children, handleClick }) {
  const url = db.url ?? ''
  const isActive = () => {
    if (link === menuActive) {
      return true
    }
    return false
  }
  return (
    <a href={url + link} onClick={() => handleClick(link)} className={`${isMobile ? 'block py-2' : ''} ${isActive() ? 'aria-current="page" menu-active' : ''}`}>{children}</a>

  )
}
