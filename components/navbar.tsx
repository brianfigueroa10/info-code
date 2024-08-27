import Link from 'next/link'
import { ModeToggle } from './toogle-mode'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <header className="flex w-full justify-between z-50 bg-secondary/80 backdrop-blur-sm md:px-24 items-center p-2  border-b-primary/50 border-b ">
      <Link href="/" className="text-2xl ">
        Info<span className="text-primary font-bold uppercase">Code</span>
      </Link>

      <nav className="flex gap-6 items-center justify-center">
        <Link href="/about" className={buttonVariants({ variant: 'link' })}>
          About
        </Link>
        {/*<ModeToggle />*/}
      </nav>
    </header>
  )
}
