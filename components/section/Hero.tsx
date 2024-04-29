'use client'
import Link from "next/link";

import Navigation from "../Navigation";

export default function Hero() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    Christian Ramirez
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Frontend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I bring designs to life with seamless interactions and a better user experience.
                </p>
                <Navigation />
            </div>
            <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-10 text-xs shrink-0">
                    <Link
                        title="Github"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://github.com/cybr2'}
                        className="block hover:text-slate-200 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </Link>
                </li>
                <li className="mr-10 text-xs shrink-0">
                    <Link
                        title="LinkedIn"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.linkedin.com/in/ydoow/'}
                        className="block hover:text-slate-200 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                    </Link>
                </li>
                <li className="mr-10 text-xs shrink-0">
                    <Link
                        title="Leetcode"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://leetcode.com/u/cybr2/'}
                        className="block hover:text-slate-200 p-0">

                        <svg className="h-6 w-6" viewBox="0 0 95 115" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" ></path><path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" ></path><path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" ></path></svg>
                    </Link>
                </li>
                <li className="mr-10 text-xs shrink-0">
                    <Link
                        title="Jobiblo"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://jobiblo.com/en/cv/ramirez-christian-ydoow-b'}
                        className="block hover:text-slate-200 p-0">
                        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                            <path d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
                        </svg>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
