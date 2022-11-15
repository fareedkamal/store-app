import { Link } from 'react-router-dom'

export const HeaderLogo = () => {
  return (
    <Link
    to="/"
    style={{
      textDecoration: 'none',
      color: 'black'
    }}>
      <div className='flx'>
        <p className='fs-m fw-l' style={{ marginRight: '0.3em' }}>PLUTO</p>
        <p className="fs-m fw-m">STORE</p>
      </div>
    </Link>

  )
}
