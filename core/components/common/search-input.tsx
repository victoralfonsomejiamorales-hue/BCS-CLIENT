"use client";

import useSearch from "@/core/hooks/use-search";

const SearchInput = () => {
  const [search, setSearch] = useSearch();
  return (
    <div className="relative">
      <input
        id="search"
        type="text"
        placeholder="Buscador de producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 pr-10 border rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
};

export default SearchInput;
