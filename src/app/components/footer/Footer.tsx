import React from 'react';
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslations } from 'next-intl';

const Footer = () => {
const t = useTranslations('Footer');
  return (
    <footer className= "px-6 py-10 bg-primaryDark text-gray ">
        <div className="flex flex-row flex-wrap justify-between w-full">
            {/*Solutions section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray ">{t('Solutions.title')}</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">{t('Solutions.marketing')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Solutions.analytics')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Solutions.commerce')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Solutions.insights')}</Link></li> 
                </ul>
            </div>

            {/*Support section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">{t('Support.title')}</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">{t('Support.pricing')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Support.documentation')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Support.guides')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Support.api Status')}</Link></li> 
                </ul>
            </div>

            {/*Company section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">{t('Company.title')}</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">{t('Company.about')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Company.blog')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Company.jobs')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Company.press')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Company.partners')}</Link></li> 
                </ul>
            </div>

            {/*LEGAL section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">{t('Legal.title')}</h3>
                <ul className="space-y-2 text-gray">
                    <li><Link href="/" className="transition hover:text-white">{t('Legal.claim')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Legal.privacy')}</Link></li>
                    <li><Link href="/" className="transition hover:text-white">{t('Legal.terms')}</Link></li>
                </ul>
            </div>

            {/*Subscribe section*/}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-gray">{t('Subscribe.title')}</h3>
                <p className="mb-3 text-sm text-gray">{t('Subscribe.infoTitle')}</p>
                <div className= "flex">
                    <input
                    className="flex-1 p-2 bg-white rounded-1-md focus:outline-none"
                    type="email"
                    placeholder="Enter your email"
                    />
                    <button className="px-4 text-white bg-primary rounded-r-md "> {t('Subscribe.subscribeBtn')}</button>
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
