import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/dpng.jpg" alt="Ninja List" height={100} width={100} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninja/list'><a>Ninja List</a></Link>
        </nav>
     );
}
 
export default Navbar;