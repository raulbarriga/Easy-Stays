import InfoCard from "@/components/InfoCard";
import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";
import { useRouter } from "next/router";

const Search = ({ searchResults }) => {
  // need getServerSideProps() now
  // this function will rebuid the page per request
  // with getStaticProps(), the information on the web page can get outdated
  // look up incremental stack generation for more info
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query; // gives us the query url params,
  const range = `${startDate} - ${endDate}`;
  return (
    <MainLayout
      placeholder={`${location} | ${range} | ${numberOfGuests} Guests`}
    >
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} For {numberOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          {/* whitespace-nowrap doesn't put the text into a new line in case the text doesn't fit in 1 line */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms And Bends</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCard
                  key={index}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Search;

// you can pass in the context variable to get things like the query params
// the tutorial just uses a dummy api for now
export async function getServerSideProps() {
  const { data: searchResults } = await axios.get(
    "https://www.jsonkeeper.com/b/5NPS"
  );

  return {
    props: {
      searchResults,
    },
  };
}
