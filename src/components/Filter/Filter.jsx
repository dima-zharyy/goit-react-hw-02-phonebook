import React from 'react';

export default function Filter({ onChange, value }) {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" onChange={onChange} value={value} />
    </>
  );
}
