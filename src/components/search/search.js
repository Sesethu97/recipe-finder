function RecipeSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-screen flex justify-end items-end">
      <form
        action=""
        className="relative mx-auto w-max"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-pink-950 focus:pl-16 focus:pr-4"
          placeholder="Search meals..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-pink-950 px-3.5 peer-focus:border-pink-950 peer-focus:stroke-pink-950"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
}

export default RecipeSearch;
