import { SearchIcon } from "@heroicons/react/solid";

const DateRangeBox = ({ searchInput, placeholder }) => {
  return (
    <>
      <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-name elementor-col-25 elementor-field-required">
        <label for="form-field-name" className="elementor-field-label">
          Check-In{" "}
        </label>

        <input
          type="date"
          name="form_fields[name]"
          id="form-field-name"
          className="elementor-field elementor-size-md  elementor-field-textual elementor-date-field elementor-use-native"
          placeholder="10/18/2023"
          required="required"
          aria-required="true"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        />
      </div>
    </>
  );
};

export default DateRangeBox;
