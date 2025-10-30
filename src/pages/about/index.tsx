import Head from "next/head";
import style from './about.module.scss'
import { FaFacebook } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
export default function About(){
    return(
        <>
        <Head>
            <title>Sobre o blog | 4EyesDuDe</title>
        </Head>

        <main className={style.container}>
            <div className={style.containerHeader}>
                <section className={style.ctaText}>
                    <h1>4EyesDude</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia a unde similique praesentium voluptas, velit rem? Cupiditate dolore sed nobis, itaque pariatur, beatae minus perspiciatis nihil molestias doloremque dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate eligendi minus. Ipsa placeat vitae ratione earum accusamus mollitia blanditiis magnam aut? Quam mollitia minima suscipit ipsam eveniet corrupti ab?.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam facere obcaecati odio magni quibusdam quos commodi minus optio? Sit quos suscipit perferendis enim distinctio! Nostrum deserunt necessitatibus corporis aspernatur.
                    </p>
                    <a href=""><BsFacebook/></a>
                    <a href=""><BsInstagram/></a>
                    <a href=""><BsWhatsapp/></a>
                    <a href=""><BsTwitter/></a>
                </section>

                <img src="/assets/logo.png" alt="" />
            </div>
        </main>
        </>
    )
}