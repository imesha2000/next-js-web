import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-6 text-[var(--gray)]">
      <Link href="/" className="hover:text-[var(--primary)] transition-all">Home</Link>
      <Link href="/stratum" className="hover:text-[var(--primary)] transition-all flex items-center">Stratum 
      <span className="text-xs bg-blue-100 text-[var(--primary)] px-1 ml-1 rounded">NEW</span>
      </Link>
      <Link href="/services" className="hover:text-[var(--primary)] transition-all">Services</Link>
      <Link href="/projects" className="hover:text-[var(--primary)] transition-all">Projects</Link>
      <Link href="/why-us" className="hover:text-[var(--primary)] transition-all">Why Us</Link>
    </div>
  );
};

export default NavLinks;
