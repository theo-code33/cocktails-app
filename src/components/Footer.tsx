import Image from 'next/image'
import logo from '../../public/logo.webp';

const Footer = () => {
    return ( 
        <footer>
            <Image
                src={logo}
                alt="Logo du site"
            />
        </footer>
     );
}
 
export default Footer;