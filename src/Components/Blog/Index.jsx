import React from 'react';
import './style.scss';

const Article = ({ article }) => {
    let { thumbnail, title, description } = article;

    return(
        <div className='col-md-4'>
            <div className="panel panel-default">
                <div className="panel-heading thumbnail"
                style={{ backgroundImage: `url(${thumbnail})` }}>

                </div>
                <div className="panel-body">
                    <h4 className="bold title">{title}</h4>
                    <p className='description'>{description}..</p>
                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    let articlesData = [
        {
            id: 1,
            thumbnail: 'https://via.placeholder.com/300',
            title: 'A História do Órgão na Música Clássica',
            description: 'Uma jornada através dos séculos explorando a evolução e o impacto do órgão na música clássica.'
        },
        {
            id: 2,
            thumbnail: 'https://via.placeholder.com/300',
            title: 'Os Maiores Compositores de Música para Órgão',
            description: 'Descubra os compositores que criaram algumas das mais belas obras para órgão ao longo da história.'
        },
        {
            id: 3,
            thumbnail: 'https://via.placeholder.com/300',
            title: 'Técnicas Avançadas para Tocar Órgão',
            description: 'Aprenda técnicas avançadas que podem ajudar músicos a dominar o órgão e executar peças complexas.'
        }
    ];

    return(
        <section id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Ultimas Postagens</h1>
                        <p className='text-center'>Acompanhe as ultimas postagens do Blog</p>
                        <br/>

                        {articlesData.map((article) => (
                            <Article article={article} key={article.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;