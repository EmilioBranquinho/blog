import Head from "next/head";
import styles from '../styles/home.module.scss';
import logo from '../../public/assets/logo.png'
import Image from "next/image";
import { GetStaticProps } from "next";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";

interface Content{
  title: string,
  title_content: string,
  linkaction: string,
  install_games_title: string,
  install_games_content: string,
  install_games_banner: string,
  news_title: string,
  news_content: string,
  news_banner: string 
}

interface ContentProps{
  content: Content;
}

export default function Home( { content }: ContentProps) {

  console.log(content)
  return (
    <>
  <Head>
    <title>4EyesDude - Início</title>
  </Head>
  <main className={styles.container}>
    <div className={styles.containerHeader}>
      <section className={styles.ctaText}>
        <h1>{content.title}</h1>
        <span>{content.title_content}</span>
        <a href={content.linkaction}>
          <button>
            Começar agora 
          </button>
        </a>
      </section>

      <img src="/assets/sub-zeromk1-2.png" alt="" />
    </div>

    <hr className={styles.divisor} />

    <div className={styles.sectionContent}>
      <section>
        <h2>{content.install_games_title}</h2>
        <span>{content.install_games_content}</span>
      </section>

      <img src={content.install_games_banner} alt="" />
    </div>

      <hr className={styles.divisor} />

       <div className={styles.sectionContent}>
      <img src={content.news_banner} alt="" />
      <section>
          <h2>{content.news_title}</h2>
          <span>{content.news_content}</span>
      </section>
    </div>

    <div className={styles.nextLevelContent}>
      <Image
      src={logo}
      width={100}
      height={100}
      alt=""
      />

      <h2>Mais de <span className={styles.visitantes}>15 mil visitantes</span> Semanais</h2>
      <span>Faça a subscrição para receber as notícias direto no seu celular</span>
      <a href="">
        <button>SUBSCREVER</button>
      </a>
    </div>
  </main>
  </>
  );
}

export const getStaticProps: GetStaticProps = async () =>{
 
  const prismic = getPrismicClient();

  const response = await prismic.getByType('home')

  //console.log(response.results[0].data);

  const { title, sub_title, linkaction, install_games, install_content, install_banner, title_news, news_content, banner_news } = response.results[0].data;

  const content = {
    title: title,
    title_content: asText(sub_title),
    linkaction: linkaction.text,
    install_games_title: install_games,
    install_games_content: asText(install_content),
    install_games_banner: install_banner.url,
    news_title: title_news,
    news_content: asText(news_content),
    news_banner: banner_news.url
  }

  console.log(content)

  return{
    props: {
      content: content,
    },
    revalidate: 60
  }
}