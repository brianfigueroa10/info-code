import Link from 'next/link'
import { ModeToggle } from './toogle-mode'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="flex justify-between z-50 bg-secondary/80 backdrop-blur-sm lg:px-24 items-center p-2  border-b-primary/50 border-b ">
      <Link href="/" className="text-2xl flex items-center gap-1 ">
        <Image
          src="/logo.png"
          alt=""
          width={130}
          height={130}
          className="size-12"
        />
        {/*Info<span className="text-primary font-bold uppercase">Code</span>*/}
      </Link>

      <nav className="flex gap-6 items-center justify-center">
        <Link href="/about" className={buttonVariants({ variant: 'link' })}>
          About
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
