import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        Sick Fits
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  )
}