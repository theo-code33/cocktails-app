import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

type drinkType = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const Search = () => {
  const [cocktails, setCocktails] = useState<drinkType[]>([]);
  const router = useRouter();
  const { params } = router.query;
  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`
      );
      const cocktailsData = await cocktailsResponse.json();
      console.log("cocktailsData", cocktailsData);
      setCocktails(cocktailsData.drinks);
      console.log(cocktailsData);
    })();
  }, [router.query]);
  return (
    <div>
      <h1>Résultat pour "{params}"</h1>
      {cocktails && cocktails.length === 0 && <p>Loading...</p>}
      {cocktails === null && (
        <p>Aucun résultat ne correspond à cette recherche</p>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {cocktails &&
          cocktails.map((cocktail) => (
            <Link
              href={`/cocktails/${cocktail.idDrink}`}
              key={cocktail.idDrink}
              style={{
                width: "300px",
                height: "300px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
              }}
              onClick={() => router.push(`/cocktails/${cocktail.idDrink}`)}
            >
              <h2>{cocktail.strDrink}</h2>
              <img
                style={{
                  width: "200px",
                }}
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Search;