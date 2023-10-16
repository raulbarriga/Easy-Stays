import Image from "next/image";

const SmallCard = ({ image, location, distance }) => {
  return (
    <div className="flex items-center m-2 ml-5 space-x-4 rounded-xl cursor-pointed hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left side */}
      <div className="relative h-16 w-16">
        <Image fill src={image} alt="location" className="rounded-lg" />
      </div>

      {/* right side */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;