"use client"
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLink = [
  {name:"Home",href:"/home"},
  {name:"About",href:"/about"},
  {name:"Projects",href:"/projects"},
  {name:"Contact",href:"/contact"},
  
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        <nav className="h-20 bg-sky-400 text-black flex justify-center items-center gap-20">
          {
            navLink.map(v=>{
              const isActive = pathname.startsWith(v.href)
              return <Link href={v.href} key={v.name} className={isActive?"font-bold underline text-white":"font-medium text-zinc-200"}>{v.name}</Link>
          })
          }
        </nav>
        {children}
      </body>
    </html>
  );
}
