import { GetServerSideProps } from 'next'
import style from './post.module.scss'
import { getPrismicClient } from '@/services/prismic';
import { asText } from '@prismicio/client';

interface PostProps{
    id: string,
    uid: string,
    post_title: string,
    post_cover: string,
    post_description: string    
}

interface Post{
    postData: PostProps;
}

export default function Post({postData}: Post){

    return(
        <>
        <h1>{postData.post_title}</h1>
        <p>{[postData.post_description]}</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({ params, req }) =>{

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
        post_description: asText(response.data.post_description),
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