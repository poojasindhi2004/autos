import CarCard from "./components/CarCard";


const cars = [
  { id: 1, brand: "Hyundai", model: "Creta", price: "12,00,000", image: "/images/creta.jpg" },
  { id: 2, brand: "Honda", model: "City", price: "9,50,000", image: "/images/city.jpg" },
  { id: 3, brand: "Tata", model: "Nexon", price: "8,20,000", image: "/images/nexon.jpg" },
  { id: 4, brand: "Maruti", model: "Brezza", price: "7,90,000", image: "/images/brezzza.jpg" },
];

export default function CarsPage() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Available Cars
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
