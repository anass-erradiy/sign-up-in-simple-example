import React from 'react'

const Logo = () => {
  return (
    <div>
        <img
            alt="logo"
            fetchpriority="high"
            width={174}
            height={70}
            decoding="async"
            data-nimg={1}
            src="https://modernize-nextjs.adminmart.com/images/logos/dark-logo.svg"
            style={{ color: 'transparent' }}
        />
    </div>
  )
}
export default Logo ;