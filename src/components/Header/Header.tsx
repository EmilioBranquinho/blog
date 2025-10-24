import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import logo from './../../../public/assets/logo.jpg'

export function Header(){
    return(
        <>
        <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
        <a href="">
            <Image
            src={logo}
            width={80}
            height={80}
            quality={100}
            alt='image'
            />
        </a>

        <nav>
            <Link
            href="/">
                <p>Home</p>
            </Link>

            <Link
            href="/">
                <p>Conteúdos</p>   
            </Link>

            <Link
            href="/">
                <p>Quem somos nós</p>  
            </Link>
        </nav>
        </div>
        </header>
        </>
    )
}