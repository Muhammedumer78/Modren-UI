import React from 'react'

export default function Button({styles}) {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium texgt-[18px] text-primary outline-none ${styles} rounded-full `}>
        Get Started
      </button>
    </div>
  )
}
