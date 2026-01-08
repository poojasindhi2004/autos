import Link from "next/link";

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Fortuner",
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
    owner: {
      name: "Amit Shah",
      phone: "9123456789",
      email: "amit@dealer.com",
      city: "Vadodara",
    },
  },
];

export default async function InquiryPage({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <h2 className="text-center mt-10">Car not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Inquiry for {car.brand} {car.model}
      </h1>

      <div className="border rounded p-4 space-y-2">
        <p><b>Owner Name:</b> {car.owner.name}</p>
        <p><b>Phone:</b> {car.owner.phone}</p>
        <p><b>Email:</b> {car.owner.email}</p>
        <p><b>City:</b> {car.owner.city}</p>
      </div>

      <Link href={`/car/${car.id}`}>
        <button className="mt-6 px-6 py-2 border rounded hover:bg-gray-100">
          ⬅ Back to Car Details
        </button>
      </Link>
    </div>
  );
}
