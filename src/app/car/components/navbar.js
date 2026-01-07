import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">SeaNeB Autos</h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/car" className="hover:text-blue-600">Cars</Link>
        <Link href="/car/login" className="hover:text-blue-600">Login</Link>
      </div>
    </nav>
  );
}
