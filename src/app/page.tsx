import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
     <h1>Assignmnet # 1</h1>

     <p>1
- Create About, Contact Us, and Service Page page
- In Service Create nested pages (app-development & website-development)
- Link them via Next Js Link Tag</p>

<Link href="/">Home Page</Link>
<Link href="/about">About Us</Link>
<Link href="/contact-us">Contact-Us</Link>
<Link href="/services">Services</Link>
<Link href="/services/web-dev">Web Development</Link>
<Link href="/services/app-dev">App Development</Link>

    </div>
  );
}
