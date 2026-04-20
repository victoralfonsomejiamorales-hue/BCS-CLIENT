"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "./use-debounce";

const useSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValue = searchParams.get("search") ?? "";
  const [search, setSearch] = useState<string>(initialValue);

  const debouncedSearch = useDebounce<string>(search, 500);
  const previousDebouncedSearch = useRef<string>(initialValue);

  useEffect(() => {
    if (debouncedSearch === previousDebouncedSearch.current) {
      return;
    }

    previousDebouncedSearch.current = debouncedSearch;

    const currentParams = new URLSearchParams(searchParams);
    if (debouncedSearch) {
      currentParams.set("search", debouncedSearch);
    } else {
      currentParams.delete("search");
    }
    router.push(`?${currentParams.toString()}`);
  }, [debouncedSearch, router, searchParams]);

  return [search, setSearch] as const;
};

export default useSearch;
