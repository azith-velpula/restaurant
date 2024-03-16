const Search = ({ handleSearch }) => {
  return (
    <div className="flex justify-center items-center ">
      <label htmlFor="search" className="mr-5 text-xl font-bold">
        Search
      </label>
      <input
        type="text"
        id="search"
        className="border-solid border-black border-2 text-2xl rounded-lg"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
