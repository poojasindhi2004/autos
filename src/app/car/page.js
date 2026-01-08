import CarCard from "./components/CarCard";

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Fortuner",
    price: "35,00,000",
    image: "/fortuner.jpg",
  },
  {
    id: 2,
    brand: "Hyundai",
    model: "Creta",
    price: "15,00,000",
    image: "/images/creta.jpg",
  },
];

export default function CarPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
