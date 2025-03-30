import React from 'react';
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className= "px-6 py-10 bg-primaryDark text-gray ">
        <div className="flex flex-row flex-wrap justify-between w-full">
            {/*Solutions section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray ">SOLUTIONS</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">Marketing</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Analytics</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Commerce</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Insights</Link></li> 
                </ul>
            </div>

            {/*Support section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">SUPPORT</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">Pricing</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Documentation</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Guides</Link></li>
                    <li><Link href="/" className="transition hover:text-white">API Status</Link></li> 
                </ul>
            </div>

            {/*Company section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">COMPANY</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">About</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Blog</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Jobs</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Press</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Partners</Link></li> 
                </ul>
            </div>

            {/*LEGAL section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">SUPPORT</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">Claim</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Privacy</Link></li>
                    <li><Link href="/" className="transition hover:text-white">Terms</Link></li>
                </ul>
            </div>

            {/*Subscribe section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">SUBSCRIBE TO OUR NEWSLATER</h3>
                <p className="mb-3 text-sm text-gray">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className= "flex">
                    <input
                    className="flex-1 p-2 bg-white rounded-1-md focus:outline-none"
                    type="email"
                    placeholder="Enter your email"
                    />
                    <button className="px-4 text-white bg-primary rounded-r-md "> Subscribe</button>
                </div>
            </div>
            
        </div>

        {/*Bottom*/}
        <div className="flex justify-between pt-6 mt-10 border-t border-gray ">
        <p>© 2020 Workflow, Inc. All rights reserved. </p>
        <div className="flex space-x-4 ">
            <Link href="/" className="hover:text-white"> <i className="fab fa-facebook"></i></Link>
            <Link href="/" className="hover:text-white"> <i className="fab fa-instagram"></i></Link>
            <Link href="/" className="hover:text-white"> <i className="fab fa-twitter"></i></Link>
            <Link href="/" className="hover:text-white"> <i className="fab fa-github"></i></Link>
        </div>    
        </div>    
    </footer>
    
  )
}

export default Footer
