import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import wolverine from '../../../public/assets/wolverine.jpg'
import MK1 from '../../../public/assets/MK1.png'
import FC26 from '../../../public/assets/FC26.jpg'
import style from './posts.module.scss'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GetStaticProps } from "next";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";
import { useState } from "react";
import { BiCalendar } from "react-icons/bi";

interface Posts{
    slug: string,
    post_title: string,
    post_cover: string,
    post_description: string,
    updatedAt: string 
}

interface PostsProps{
    posts: Posts[]
}


export default function Posts( { posts: blogPosts }: PostsProps ){

   const[posts, setPosts] = useState(blogPosts)

    return(
        <>
        <Head>
            <title>Blog | 4eyesDude</title>
        </Head>
        <main  className={style.container}>
          <div className={style.posts}>
            {posts.map((post => (
                <>
                <Link
                key={post.slug}
                className={style.link}
                href="/">
                <Image
                src={post.post_cover}
                alt=""
                width={720}
                height={410}
                quality={100}
                />
                <strong>{post.post_title}</strong>
                <time className={style.timeStyles}>
                   <i><BiCalendar/></i> {post.updatedAt}
                </time>
                <p>{post.post_description}</p>
                </Link>    
                </>
            )))}
       


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

export const getStaticProps: GetStaticProps = async() =>{

    const prismic = await getPrismicClient();

    const response = await prismic.getByType("post", { 
    pageSize: 3, 
    orderings: ["document.last_publication_date desc"], 
    fetch: ["post_title", "post_cover", "post_desciption"] 
});


    const posts = response.results.map(post =>{
 const paragraph = post.data.post_description.find(block => block.type === "paragraph") as { text?: string } | undefined;

        return{
            slug: post.uid,
            post_title: post.data.post_title,
            post_cover: post.data.post_cover.url,
            post_description: paragraph?.text,
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: "numeric"
            })
        }
    })

    console.log(posts)

    return{
        props: { posts },
        revalidate: 60
    }
}