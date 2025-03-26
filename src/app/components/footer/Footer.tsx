import React from 'react';
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className= "bg-[var(--primaryDark)] text-[var(--gray py-10 px-6  ">
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-5 ">
            {/*Solutions section*/}
            <div>
                <h3 className="text-[var(--gray)] text-lg font-semibold mb-4 ">SOLUTIONS</h3>
                <ul className="space-y-2 text-[var(--gray)]">
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Marketing</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Analytics</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Commerce</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Insights</Link></li> 
                </ul>
            </div>

            {/*Support section*/}
            <div>
                <h3 className="text-[var(--gray)] text-lg font-semibold mb-4">SUPPORT</h3>
                <ul className="space-y-2 text-[var(--gray)]">
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Pricing</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Documentation</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Guides</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">API Status</Link></li> 
                </ul>
            </div>

            {/*Company section*/}
            <div>
                <h3 className="text-[var(--gray)] text-lg font-semibold mb-4">COMPANY</h3>
                <ul className="space-y-2 text-[var(--gray)]">
                    <li><Link href="/" className="hover:text-[var(--white)] transition">About</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Blog</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Jobs</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Press</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Partners</Link></li> 
                </ul>
            </div>

            {/*LEGAL section*/}
            <div>
                <h3 className="text-[var(--gray)] text-lg font-semibold mb-4">SUPPORT</h3>
                <ul className="space-y-2 text-[var(--gray)]">
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Claim</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Privacy</Link></li>
                    <li><Link href="/" className="hover:text-[var(--white)] transition">Terms</Link></li>
                </ul>
            </div>

            {/*Subscribe section*/}
            <div>
                <h3 className="text-[var(--gray)] text-lg font-semibold mb-4">SUBSCRIBE TO OUR NEWSLATER</h3>
                <p className="mb-3 text-sm text-[var(--gray)]">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className= "flex">
                    <input
                    className="flex-1 p-2 bg-[var(--gray)] rounded-1-md focus:outline-none"
                    type="email"
                    placeholder="Enter your email"
                    />
                    <button className="bg-[var(--primary)] text-[var(--white)] px-4 rounded-r-md"> Subscribe</button>
                </div>
            </div>
            
        </div>

        {/*Bottom*/}
        <div className="mt-10 border-[var(--gray)] border-t pt-6 flex justify-between ">
        <p>© 2020 Workflow, Inc. All rights reserved. </p>
        <div className="flex space-x-4 ">
            <Link href="/" className="hover:text-[var(--white)]"> <i className="fab fa-facebook"></i></Link>
            <Link href="/" className="hover:text-[var(--white)]"> <i className="fab fa-instagram"></i></Link>
            <Link href="/" className="hover:text-[var(--white)]"> <i className="fab fa-twitter"></i></Link>
            <Link href="/" className="hover:text-[var(--white)]"> <i className="fab fa-github"></i></Link>
        </div>    
        </div>    
    </footer>
    
  )
}

export default Footer
