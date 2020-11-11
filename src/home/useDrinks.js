import useSWR from "swr";

export function useDrinks(string) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`,
    fetcher
  );
  return {
    drinker: data,
    isLoading: !error && !data,
    isError: error,
  };
}
