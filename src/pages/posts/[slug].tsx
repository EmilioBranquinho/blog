import { GetServerSideProps } from 'next'
import style from './post.module.scss'
import { getPrismicClient } from '@/services/prismic';
import { asHTML, asText } from '@prismicio/client';
import Head from 'next/head';
import Image from 'next/image';

interface PostProps{
    id: string,
    uid: string,
    post_title: string,
    post_cover: string,
    post_description: string  ,
    updatedAt: string;  
}

interface Post{
    postData: PostProps;
}

export default function Post({postData}: Post){

    return(
        <>
        <Head>
            <title>{postData.post_title}</title>
        </Head>
        <main className={style.container}>
            <article className={style.post}>
                <Image
                src={postData.post_cover}
                quality={100}
                width={720}
                height={410}
                alt={postData.post_title}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNksPn/AAADnAIdiEsNQAAAAABJRU5ErkJggg=='
                />
            <h1>{postData.post_title}</h1>
            <time>{postData.updatedAt}</time>
            <div className={style.postContent} dangerouslySetInnerHTML={{__html: postData.post_description}}></div>
           </article>
        </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({ params, req }) => {

    const slug = params?.slug as string;
    
    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('post', String(slug), {});

    if(!response){
        return{
            redirect:{
                destination: "/posts",
                permanent: false
            }
        }
    }

    const postData = {
        id: response.id,
        uid: response.uid,
        post_title: response.data.post_title,
        post_cover: response.data.post_cover.url,
        post_description: asHTML(response.data.post_description),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-Br", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
    }

    console.log(postData)

    return{
        props:{
            postData
        }
    }
}