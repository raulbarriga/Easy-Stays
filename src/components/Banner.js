import Image from "next/image";

const Banner = () => {
  return (
    // h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
    // 98px is the total height of the header (we want the banner not to exceeed the height of the viewport)
    <div className="relative" style={{ height: "calc(100vh - 98px)" }}>
      <Image
        src="https://s3.amazonaws.com/fse1.relahq.com/public/styles/kb_full/s3/property-images/prop-nid-83661131/adobestock_198467490.jpg"
        fill
        alt="banner"
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not Sure Where To Go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
