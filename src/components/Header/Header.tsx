import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import logo from './../../../public/assets/logo.jpg'
import { ActiveLink } from '../Active-link'

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
            <ActiveLink href="/" activeClassName={styles.active}>
                <p>Home</p>
            </ActiveLink>

            <ActiveLink href="/posts" activeClassName={styles.active}>
                <p>Conteúdos</p>   
            </ActiveLink>

            <ActiveLink href="/about" activeClassName={styles.active}>
                <p>Quem somos nós</p>  
            </ActiveLink>
        </nav>

        <a className={styles.readyButton} type='button' href="#">COMECAR</a>
        </div>
        </header>
        </>
    )
}