import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link'

const Header = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleNavigateSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/cocktails/search/${search}`);
    };

    return ( 
        <header>
            
            <form onSubmit={handleNavigateSearch}>
                <Link href="/">HomePage</Link>
                <Link href="/cocktails">Cocktail</Link>
                <input type="search" name="search" id="search" onInput={handleSearch}/>
                <button type="submit">Rechercher</button>
            </form>
        </header>
     );
}
 
export default Header;