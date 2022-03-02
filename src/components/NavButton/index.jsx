
export default function MenuButton ({ link, menuActive, title, isMobile, children, handleClick }) {
  const isActive = () => {
    if (link === menuActive) {
      return true
    }
    return false
  }
  return (
    <a href={link} onClick={() => handleClick(link)} className={`${isMobile ? 'block py-2' : ''} ${isActive() ? 'aria-current="page" menu-active' : ''}`}>{children}</a>

  )
}
