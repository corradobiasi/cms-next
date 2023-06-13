import Link from 'next/link'

export default function Header() {
  return (
     <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
       <Link href="/" className="hover:underline">
         Blog
       </Link>
       <img src="//images.ctfassets.net/m8zwsu9tyucg/69tuEJ9vxa2PEWe8i6LvNs/898165bceb99bda8ea1b9d0416c7cbc7/Motto_Logo_White_v2.svg" width="102" />
       <img src="//images.ctfassets.net/m8zwsu9tyucg/69tuEJ9vxa2PEWe8i6LvNs/898165bceb99bda8ea1b9d0416c7cbc7/Motto_Logo_White_v2.svg" width="102"></img>
     </h2>
  )
}
