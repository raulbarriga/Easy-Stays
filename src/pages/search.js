import MainLayout from "@/components/layouts/MainLayout";
import { useRouter } from "next/router";

const Search = () => { // left off at 3:17:16 
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query; // gives us the query url params
  const range = `${startDate} - ${endDate}`;
  return (
    <MainLayout placeholder={`${location} | ${range} | ${numberOfGuests} Guests`}>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} For {numberOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
    ***REMOVED***/* whitespace-nowrap doesn't put the text into a new line in case the text doesn't fit in 1 line */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms And Bends</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
    </MainLayout>
  );
***REMOVED***

export default Search;
