import axios from "axios";

import Head from "next/head";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import MainLayout from "@/components/layouts/MainLayout";

// this is the home page @ '/'
export default function Home({ smallCardData, cardsData }) {
  return (
    <>
      <Head>
        <title>Easy Stays</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <MainLayout>
  ***REMOVED***/* Banner */}
        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      ***REMOVED***/* pull data from api */}
      ***REMOVED***/* for a home screen where data doesn't change much, we can use static rendering */}
      ***REMOVED***/* for server-side rendering, every request that comes in will regenerate the page */}
      ***REMOVED***/* static rendering caches it on the server & gives the same page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        ***REMOVED***smallCardData?.map(({ img, location, distance }, index) => (
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
        ***REMOVED***cardsData?.map(({ img, title }, index) => (
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
      </MainLayout>
    </>
  ); //
}
// for static site rendering (only works in pages)
export async function getStaticProps() {
  try {
    // fetches an object with image, location, & distance
    const { data: smallCardData } = await axios.get(
      "https://www.jsonkeeper.com/b/4G1G"
    );
    // console.log("smallCardData: ", smallCardData)

    const { data: cardsData } = await axios.get(
      "https://www.jsonkeeper.com/b/VHHT"
    );
    // console.log("cardsData: ", cardsData)
    return {
      props: {
        smallCardData,
        cardsData,
***REMOVED***
    ***REMOVED***
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return an empty object or an error flag to indicate the error
    return {
      props: {
        error: "Error fetching data", // You can customize this error message
***REMOVED***
    ***REMOVED***
  }
}
