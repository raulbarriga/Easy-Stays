import Image from "next/image";
import { useState } from "react";
import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import { format } from "date-fns";
import DateRange from "../DateRange";

const Header = () => {
  // to convert the Date object into a string
  const [startDateString, setStartDateString] = useState("");
  const [endDateString, setEndDateString] = useState("");
  // the value of the date range div
  const DEFAULT_DATE_RANGE_VALUE = "Check In - Check Out";
  const [dateRangeString, setDateRange] = useState(DEFAULT_DATE_RANGE_VALUE);
  // this resolved the issue of all dates being selected initially when setting state to null & trying to use the start/end date placeholders:
  // https://github.com/hypeserver/react-date-range/issues/330#issuecomment-802601417
  const [startDate, setStartDate] = useState(null); // Date object is the data type for these
  const [endDate, setEndDate] = useState(new Date(""));
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  // to open/close the date range picker when I click on the date range input tag
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  //receive the values the user's selecting, then update the startDate & endDate, respectively
  const handleSelect = (ranges) => {
    // .selection comes from the selectionRange.key variable's property (spelling/capitalization matters!)

    // ranges.selection.startDate is a Date object type
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    // Set the input tag's value to the concatenated string
    setDateRange(
      `${format(ranges.selection.startDate, "MM-dd-yyyy")} - ${format(
        ranges.selection.endDate,
        "MM-dd-yyyy"
      )}`
    );
  };

  const resetInput = () => {
    // for the date range div value
    setDateRange(DEFAULT_DATE_RANGE_VALUE);
    // for the date range picker component values
    setStartDate(null); // original values
    setEndDate(new Date(""));
  };

  const searchHander = () => {
    // we send the filtered search results via url so if the user shares the link url, they'll have the same search results (can't do that with redux)

    // format() returns a string from the Date object with the desired date format
    const formattedStartDate = format(startDate, "MM-dd-yyyy");
    const formattedEndDate = format(endDate, "MM-dd-yyyy");

    setStartDateString(formattedStartDate);
    setEndDateString(formattedEndDate);

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        numberOfGuests,
      },
    });
  };

  // console.log("isOpen: ", isOpen);
  return (
    // white bg-zinc-900
    <header className="relative top-0 z-50 grid grid-cols-3 text-white shadow-md p-5 md:px-10">
      {/* left div */}
      {/*  flex items-center  */}
      <div className="relative h-10 my-auto w-[128px]">
        <Link href="/">
          <Image
            src="/images/Airbnb_Logo.png"
            alt="logo"
            fill
            className="object-contain object-left"
          />
        </Link>
      </div>
      {/* middle div - Search */}
      <DateRange
        startDateString={startDateString}
        endDateString={endDateString}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleSelect={handleSelect}
        selectionRange={selectionRange}
        dateRangeString={dateRangeString}
        resetInput={resetInput}
      />
      {/* right div */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {/* date range picker under the header's search box */}
    </header>
  );
};

export default Header;
