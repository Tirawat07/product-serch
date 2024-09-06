import React from "react";

export default function ProductSearch(props) {
  const { searchFilter, setSearchFilter } = props;
  const submitHdl = (e) => {
    e.preventDefault();
  };
  const hdlInput = (e) => {
    setSearchFilter(e.target.value)
  }
  return (
    <div>
      <form onSubmit={submitHdl}>
        <input
          onChange={(e) => hdlInput(e)}
          type="text"
          placeholder="search here"
        />
      </form>
    </div>
  );
}