import React, { Fragment } from "react";

const SearchBox = ({searchChange}) => {
  return (
    <Fragment>
      <input type="search"
       placeholder="search robots" 
       className="pa3 bg-lightest-blue b--green" onChange={searchChange}/>
    </Fragment>
  );
};

export default SearchBox;
