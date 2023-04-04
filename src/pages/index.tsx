import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


type drinkResponseType = {
  drinks: drinkType[];
}

type drinkType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

type HomeProps = {
  drinks: drinkType[];
  randomDrink: drinkType;
}


// ReturnType<getStaticProps>
const Home: React.FC<HomeProps> = ({drinks, randomDrink}) => {
  const [drinksRendered, setDrinksRendered] = useState<drinkType[]>([])
  useEffect(() => {
    drinks.splice(6, drinks.length)
    setDrinksRendered(drinks)
  },[drinks])
  return (
    <>
      <h1>Notre recommandation</h1>
        <Link href={`/cocktails/${randomDrink.idDrink}`} key={randomDrink.idDrink} className='card-item'>
          <h1>{randomDrink.strDrink}</h1>
          <Image
            src={randomDrink.strDrinkThumb}
            alt={randomDrink.strDrink}
            width={200}
            height={200}
          />
        </Link>
      <h1>Nos derniers cocktail</h1>
      <div className='grid-alcool'>
        {drinksRendered && drinksRendered.map((drink: any) => (
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
    </>
  )
}

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  const drinks: drinkResponseType = await res.json()

  const resRandom = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const randomDrink: drinkResponseType = await resRandom.json()
  
  return {
    props: {
      drinks: drinks.drinks,
      randomDrink: randomDrink.drinks[0]
    },
  }
}