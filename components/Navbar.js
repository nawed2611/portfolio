import React from 'react'
import cn from 'classnames';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul
                className={cn(
                    
                    'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
                    
                )}
            >
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/">
                        <a className="flex w-auto pb-4">Home</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/guestbook">
                        <a className="flex w-auto pb-4">Guestbook</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/dashboard">
                        <a className="flex w-auto pb-4">Dashboard</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/blog">
                        <a className="flex w-auto pb-4">Blog</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/snippets">
                        <a className="flex w-auto pb-4">Snippets</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/newsletter">
                        <a className="flex w-auto pb-4">Newsletter</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/tweets">
                        <a className="flex w-auto pb-4">Tweets</a>
                    </Link>
                </li>
                <li
                    className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                    
                >
                    <Link href="/uses">
                        <a className="flex w-auto pb-4">Uses</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar