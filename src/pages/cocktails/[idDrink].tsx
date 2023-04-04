import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type drinkResponseType = {
    drinks: drinkType[];
}

type drinkType = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strCategory: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
}

const CocktailTemplate = () => {
    const [drinkRendered, setDrinkRendered] = useState<drinkType>({
        idDrink: '',
        strDrink: '',
        strDrinkThumb: '',
        strInstructions: '',
        strCategory: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: ''
    })
    const router = useRouter();
    const { idDrink } = router.query;

    const fetchDrink = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997`)
        const data: drinkResponseType = await res.json()
        setDrinkRendered(data.drinks[0])
        console.log(data);
        
    }
    useEffect(() => {
        fetchDrink()
    }, [idDrink])
    return ( 
        <div>
            {
                drinkRendered && (
                    <>
                        <Image
                            src={drinkRendered.strDrinkThumb}
                            alt={drinkRendered.strDrink}
                            width={2000}
                            height={400}
                            style={{objectFit: 'cover', objectPosition: 'center'}}
                        />
                        <div style={{display: "flex", alignItems:'center', justifyContent: "space-around"}}>
                            <h1>{drinkRendered.strDrink}</h1>
                            <p>{drinkRendered.strCategory}</p>
                        </div>
                        <p style={{textAlign: "center"}}>{drinkRendered.strInstructions}</p>
                        <ul>
                            {drinkRendered.strIngredient1 && <li>{drinkRendered.strIngredient1}</li>}
                            {drinkRendered.strIngredient2 && <li>{drinkRendered.strIngredient2}</li>}
                            {drinkRendered.strIngredient3 && <li>{drinkRendered.strIngredient3}</li>}
                            {drinkRendered.strIngredient4 && <li>{drinkRendered.strIngredient4}</li>}
                            {drinkRendered.strIngredient5 && <li>{drinkRendered.strIngredient5}</li>}
                            {drinkRendered.strIngredient6 && <li>{drinkRendered.strIngredient6}</li>}
                            {drinkRendered.strIngredient7 && <li>{drinkRendered.strIngredient7}</li>}
                            {drinkRendered.strIngredient8 && <li>{drinkRendered.strIngredient8}</li>}
                            {drinkRendered.strIngredient9 && <li>{drinkRendered.strIngredient9}</li>}
                            {drinkRendered.strIngredient10 && <li>{drinkRendered.strIngredient10}</li>}
                            {drinkRendered.strIngredient11 && <li>{drinkRendered.strIngredient11}</li>}
                            {drinkRendered.strIngredient12 && <li>{drinkRendered.strIngredient12}</li>}
                            {drinkRendered.strIngredient13 && <li>{drinkRendered.strIngredient13}</li>}
                            {drinkRendered.strIngredient14 && <li>{drinkRendered.strIngredient14}</li>}
                            {drinkRendered.strIngredient15 && <li>{drinkRendered.strIngredient15}</li>}
                        </ul>
                    </>

                )
            }
            
        </div>
    );
}
 
export default CocktailTemplate;