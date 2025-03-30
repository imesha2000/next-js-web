import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden space-x-6 text-gray md:flex">
      <Link href="/" className="transition-all hover:text-primary">Home</Link>
      <Link href="/stratum" className="flex items-center transition-all hover:text-primary">Stratum 
      <span className="px-1 ml-1 text-xs bg-blue-100 rounded text-primary">NEW</span>
      </Link>
      <Link href="/services" className="transition-all hover:text-primary">Services</Link>
      <Link href="/projects" className="transition-all hover:text-primary">Projects</Link>
      <Link href="/why-us" className="transition-all hover:text-primary">Why Us</Link>
    </div>
  );
};

export default NavLinks;
