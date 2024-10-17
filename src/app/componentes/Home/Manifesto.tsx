// components/manifesto/Manifesto.tsx
const Manifesto = () => {
  return (
    <section className="py-12 bg-red-600 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Our Manifesto</h2>
      <div className="max-w-3xl mx-auto">
        <img src="/images/car.jpg" alt="Car Image" className="w-full h-auto object-cover rounded-md" />
      </div>
    </section>
  );
};

export default Manifesto;
