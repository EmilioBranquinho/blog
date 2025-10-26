import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import wolverine from '../../../public/assets/wolverine.jpg'
import MK1 from '../../../public/assets/MK1.png'
import FC26 from '../../../public/assets/FC26.jpg'
import style from './posts.module.scss'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Posts(){
    return(
        <>
        <Head>
            <title>Blog | 4eyesDude</title>
        </Head>
        <main  className={style.container}>
            <div className={style.posts}>
                <Link
                className={style.link}
                href="/">
                <Image
                src={wolverine}
                alt=""
                width={720}
                height={410}
                quality={100}
                />
                <strong>Wolverine PS5 ganha data de lançamento e mais novidades</strong>
                <time>
                    25 de Outubro de 2025
                </time>
                <p>O novo jogo da Insomniac games em parceria com a MARVEL, teve sua data de estreia divulgada.</p>
                </Link>
            </div>

            <div className={style.posts}>
                <Link
                className={style.link}
                href="/">
                <Image
                src={MK1}
                alt=""
                width={720}
                height={410}
                quality={100}
                />
                <strong>Mortal Kombat 1 recebe atualização com novos personagens icônicos</strong>
                <time>
                    03 de Agosto de 2025
                </time>
                <p>O jogo teve uma atualização repentina nesta madrugada com novos personagens e alguns deles, icônicos para fãs da franquia.</p>
                </Link>
            </div>


            <div className={style.posts}>
                <Link
                className={style.link}
                href="/">
                <Image
                src={FC26}
                alt=""
                width={720}
                height={410}
                quality={100}
                />
                <strong>FC 26 prometeu muito para os fãs, mas no final deixou muito a desejar</strong>
                <time>
                    18 de Outubro de 2025
                </time>
                <p>O EA FC26 criou muita expectativa para os fãs, mas a realidade foi diferente segundo comentários do jogadores.</p>
                </Link>

                <div className={style.buttonNavigate}>
                    <div>
                        <button>
                            <FiChevronLeft size={25} color="#FFFF"/>   
                        </button>
                        <button>
                            <FiChevronLeft size={25} color="#FFFF"/>   
                        </button>
                    </div>

                    <div>
                        <button>
                            <FiChevronRight size={25} color="#FFFF"/>   
                        </button>
                        <button>
                            <FiChevronRight size={25} color="#FFFF"/>   
                        </button>     
                    </div> 
                </div>
            </div>
        </main>
        </>
    )
}