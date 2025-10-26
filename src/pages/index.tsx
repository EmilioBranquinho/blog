import Head from "next/head";
import styles from '../styles/home.module.scss';
import logo from '../../public/assets/logo.png'
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Head>
    <title>4EyesDude - Início</title>
  </Head>
  <main className={styles.container}>
    <div className={styles.containerHeader}>
      <section className={styles.ctaText}>
        <h1>Mergulhe no universo NERD👽</h1>
        <span>Tudo sobre o mundo NERD  em um só blog, Jogos, Filmes, Animes, séries, Quadrinhos, Mangás, Lançamentos e muito mais! </span>
        <a>
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
        <h2>Aprenda a instalar jogos no console desbloqueado🔓🔥</h2>
        <span>Você vai aprender como desbloquear, baixar e instalar jogos em um console desbloqueado passo a passo</span>
      </section>

      <img src="/assets/ps4Jailbreak.png" alt="" />
    </div>

      <hr className={styles.divisor} />

       <div className={styles.sectionContent}>
      <img src="/assets/gtaVI.png" alt="" />
      <section>
          <h2>Veja todas as notícias de novos lançamentos</h2>
          <span>Datas de lançamento, previsões, rumores e muito mais!</span>
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
