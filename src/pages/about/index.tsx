import Head from "next/head";
import style from './about.module.scss'
import { FaFacebook } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GetStaticProps } from "next";
import { getPrismicClient } from "@/services/prismic";
import { asHTML } from "@prismicio/client";


interface AboutProps{
    about: {
        blog_name: string,
        blog_logo: string,
        blog_description: string,
        facebook_link: string,
        instagram_link: string,
        twitter_link: string,
        whatsapp_link: string       
    }
}

export default function About({ about }: AboutProps){
    return(
        <>
        <Head>
            <title>Sobre o blog | 4EyesDuDe</title>
        </Head>

        <main className={style.container}>
            <div className={style.containerHeader}>
                <section className={style.ctaText}>
                    <h1>{about.blog_name}</h1>
                    <div dangerouslySetInnerHTML={{__html: about.blog_description}}></div>
                    <a href={about.facebook_link} ><BsFacebook/></a>
                    <a href={about.instagram_link}><BsInstagram/></a>
                    <a href={about.whatsapp_link}><BsWhatsapp/></a>
                    <a href={about.twitter_link}><BsTwitter/></a>
                </section>

                <img src="/assets/logo.png" alt="" />
            </div>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async() =>{

    const prismic = getPrismicClient();

    const response = await prismic.getByType("about");

    const { blog_name, blog_logo, blog_description, facebook_link, twitter_link, whatsapp_link, instagram_link } = response.results[0].data;

    const about = {
        blog_name: blog_name,
        blog_logo: blog_logo.url,
        blog_description: asHTML(blog_description),
        facebook_link: facebook_link.text,
        instagram_link: instagram_link.text,
        twitter_link: twitter_link.text,
        whatsapp_link: whatsapp_link.text
    }

    return{
        props:{
            about
        },
        revalidate: 60 * 5
    }
}