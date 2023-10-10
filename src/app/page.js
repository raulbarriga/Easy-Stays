import Banner from "@/components/Banner";
import RootLayout from "./layout";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";

export const metadata = {
  title: "Easy Stays",
};

const getData = async () => {
  try {
    // fetches an object with image, location, & distance
    const { data: smallCardData } = await fetch(
      "https://www.jsonkeeper.com/b/4G1G"
    );
    // console.log("smallCardData: ", smallCardData)

    const { data: cardsData } = await fetch(
      "https://www.jsonkeeper.com/b/VHHT"
    );
    // console.log("cardsData: ", cardsData)
    return {
      smallCardData,
      cardsData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Page = async () => {
  const { smallCardData, cardsData } = await getData();

  return (
    <RootLayout>
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from api */}
          {/* for a home screen where data doesn't change much, we can use static rendering */}
          {/* for server-side rendering, every request that comes in will regenerate the page */}
          {/* static rendering caches it on the server & gives the same page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCardData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                image={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard key={index} image={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist Curated By AirBnB"
          buttonText="Get Inspired"
        />
      </main>
    </RootLayout>
  );
};

export default Page;
