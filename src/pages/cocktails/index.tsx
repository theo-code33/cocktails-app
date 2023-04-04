import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type drinkResponseType = {
    drinks: drinkType[];
}

type drinkType = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

type CocktailProps = {
    drinks: drinkType[];
}

const Cocktail: React.FC<CocktailProps> = ({drinks}) => {
    useEffect(() => {
        console.log(drinks);
    }, [drinks])
    return ( 
        <div>
            <h1>Cocktail</h1>
            <div className='grid-alcool'>
                {drinks && drinks.map((drink: any) => (
                    <Link href={`/cocktails/${drink.idDrink}`} key={drink.idDrink} className='card-item'>
                        <h1>{drink.strDrink}</h1>
                        <Image
                            src={drink.strDrinkThumb}
                            alt={drink.strDrink}
                            width={200}
                            height={200}
                        />
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Cocktail;

export const getStaticProps = async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    const data: drinkResponseType = await res.json()
    
    return {
        props: {
            drinks: data.drinks
        }
    }
}