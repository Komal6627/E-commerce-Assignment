// components/Navbar.js
import Link from 'next/link';
import logo from "../assets/logo.webp"
import Image from 'next/image'; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-violet-600 shadow-md text-white">
        <div className="flex items-center gap-2">
        <Image 
          src={logo}
          alt="E-Shop Logo" 
          width={32}
          height={32}
          className="rounded-full" // Adjust size as needed
        />
      <h1 className="text-xl font-bold ">E-Shop</h1>
      </div>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/categories">Categories</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
