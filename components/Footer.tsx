import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='text-white-800 border-t  border-black-400 bg-black-100 w-full flex flex-col gap-4 justify-center px-5 py-7 text-sm md:text-lg lg:flex-row lg:justify-between'>
      <p>
        Copyright © 2023 JS Mastery Pro | All Right Reserved
      </p>
      <div className='flex gap-x-9'>
        <Link href={"/terms-of-use"}>Terms of Use</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer