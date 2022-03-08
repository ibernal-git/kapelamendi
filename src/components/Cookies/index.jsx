import { useState, useEffect } from 'react'
export default function Cookies () {
  const [isAccepted, setIsAccepted] = useState(true)
  useEffect(() => {
    const cookies = globalThis.localStorage.getItem('cookies') ?? false
    if (cookies) setIsAccepted(true)
    else {
      setIsAccepted(false)
    }
  }, [])
  const handleClick = () => {
    setIsAccepted(true)
    globalThis.localStorage.setItem('cookies', 'true')
  }
  return (
    <>
      {
      isAccepted
        ? null
        : <Banner handleClick={handleClick} />
      }
    </>

  )
}

function Banner ({ handleClick }) {
  return (
    <div className='fixed bottom-0 w-full bg-primary px-8 text-black font-bold'>
      <div className='flex flex-row justify-between items-center py-4'>
        <div>
          <p>Esta web únicamente utiliza cookies propias con finalidad técnica, no recaba ni cede datos de carácter personal de los usuarios sin su conocimiento.</p>
        </div>
        <div>
          <button className='bg-secondary p-4 rounded text-white' onClick={handleClick}>Entendido</button>
        </div>
      </div>
    </div>
  )
}
