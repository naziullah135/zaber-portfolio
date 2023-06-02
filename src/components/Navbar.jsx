import Image from "next/image";

const Navbar = () => {
    return (
      <div className='flex justify-between p-4'>
        <div>
          <Image width={50} height={50} src='/logo/JAED.png' alt='logo' />
        </div>
        <div>
          <ul className='flex'>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    )
};

export default Navbar;