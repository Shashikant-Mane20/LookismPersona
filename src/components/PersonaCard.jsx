function PersonaCard({ persona }) {
  return (
    <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={persona.image}
        alt={persona.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{persona.name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{persona.role}</p>
      <p className="mt-2">{persona.description}</p>
    </div>
  );
}

export default PersonaCard;
