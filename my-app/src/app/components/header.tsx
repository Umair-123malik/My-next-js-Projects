import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">

        <div className="text-white font-bold text-lg">Your Logo</div>
        
        <div className="flex space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/project" className="text-white hover:text-gray-300">Project</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
    </div>
</nav>

    )
  }
  export default Navbar;
  