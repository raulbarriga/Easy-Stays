import MainLayout from "@/components/layouts/MainLayout";

const Search = () => {
    //  TODO: grab the search query params from the url
    // left off @ 3:07:40
  return (
    <MainLayout>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays For 5 Number Of Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
    ***REMOVED***/* whitespace-nowrap doesn't put the text into a new line in case the text doesn't fit in 1 line */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">
              Cancellation Flexibility
            </p>
            <p className="button">
              Type Of Places
            </p>
            <p className="button">
              Price
            </p>
            <p className="button">
              Rooms And Bends
            </p>
            <p className="button">
              More Filters
            </p>
          </div>
        </section>
      </main>
    </MainLayout>
  );
***REMOVED***

export default Search;
