import { GetServerSideProps } from 'next'
import style from './post.module.scss'

export default function Post(){
    return(
        <>
        <h1>Detalhe do post</h1>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({ params }) =>{

    const slug = params?.slug as string;
    console.log(slug)

    return{
        props:{}
    }
}