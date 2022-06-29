import React from 'react'
import Link from 'next/link';
import cn from 'classnames'
const AboutCards = ({ title, gradient }) => {
  return (
    <Link href="/">
    <a
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-extralight mb-6 sm:mb-10 w-full text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
      </div>
    </a>
  </Link>
  )
}

export default AboutCards