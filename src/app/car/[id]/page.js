import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Fortuner",
    price: "35,00,000",
    image: "/fortuner.jpg",
    fuel: "Diesel",
    transmission: "Automatic",
    seating: 7,
    owner: {
      name: "Raj Patel",
      phone: "9876543210",
      email: "raj@dealer.com",
      city: "Ahmedabad",
    },
  },
  {
    id: 2,
    brand: "Hyundai",
    model: "Creta",
    price: "15,00,000",
    image: "/images/creta.jpg",
    fuel: "Petrol",
    transmission: "Manual",
    seating: 5,
    owner: {
      name: "Amit Shah",
      phone: "9123456789",
      email: "amit@dealer.com",
      city: "Vadodara",
    },
  },
];

export default async function CarDetails({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <h2 className="text-center mt-10">Car not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Image src={car.image} alt={car.model} width={600} height={400} />

      <h1 className="text-2xl font-bold mt-4">
        {car.brand} {car.model}
      </h1>

      <p className="text-xl text-blue-600 font-semibold mt-2">
        ₹{car.price}
      </p>

      <div className="mt-4 space-y-2">
        <p><b>Fuel:</b> {car.fuel}</p>
        <p><b>Transmission:</b> {car.transmission}</p>
        <p><b>Seating:</b> {car.seating}</p>
      </div>

      {/* ✅ Buttons */}
      <div className="mt-6 flex gap-4">
        <Link href="/car">
          <button className="px-6 py-2 border rounded hover:bg-gray-100">
            ⬅ Back to Cars
          </button>
        </Link>

        <Link href={`/car/${car.id}/inquiry`}>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Inquiry
          </button>
        </Link>
      </div>
    </div>
  );
}
