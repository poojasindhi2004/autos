import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      <Image
        src="/images/creta.jpg"
        alt="Hero Car"
        fill
        className="object-cover opacity-60"
        priority
      />

      <div className="relative text-center">
        <h1 className="text-5xl font-bold">
          Buy & Sell Cars with Trusted Dealers
        </h1>

        <p className="mt-4">
          Verified dealers • Easy booking • Secure platform
        </p>

        <div className="mt-6 space-x-4">
          <Link
            href="/car"
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Browse Cars
          </Link>

          <Link
            href="/car/login"
            className="border px-6 py-3 rounded"
          >
            Become a Dealer
          </Link>
        </div>
      </div>
    </section>
  );
}
