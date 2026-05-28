import React from 'react';
import { Box, Typography, Container} from '@mui/material';
import BlogCard from '../components/BlogCard';

const posts = [
    {
        id: 1,
        titulo: 'O que é Câmbio e por que ele é importante?',
        
        resumo: 'Entenda o que é câmbio e como ele influencia a economia.',

        texto: 'O câmbio representa a troca entre moedas diferentes como Real, Dólar, Euro. Ele é muito utilizado em viagens internacionais, comércio exterior e investimentos. O valor do câmbio é determinado por diversos fatores, como oferta e demanda, taxas de juros, inflação e estabilidade econômica. O câmbio é importante porque afeta o custo de produtos importados, a competitividade das exportações e o poder de compra dos consumidores. Além disso, o câmbio pode influenciar a inflação e o crescimento econômico de um país.',
        
        imagem: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a'
    
    },

    {
        id: 2,
        titulo: 'Como o funciona a conversão de moedas?',
        
        resumo: 'Veja como as taxas de câmbio são aplicadas.',

        texto: 'A conversão de moedas funciona através das traxas qeu representam o valor de uma moeda em relação à outra. O usuário informa um valor e escolha as moedas desejadas.',

        imagem: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e'
    },

    {
        id: 3,

        titulo: 'Por que os valores das moedas mudam?',

        resumo: 'Descubra os fatores que influenciam a economia.',

        texto: 'Os valores das moedas variam devido a fatores econômicos e políticos como inflação, juros, exportações e estabilidade internacional.',

        imagem: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3'
    }
];


export default function Blog() {
    return (
        <Box 
            sx={{
                minHeight: '88vh',
                py: 6,
                background: 'linear-gradient(to right, #120c24, #1c1238)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: {
                    xs: 'scroll',
                    md: 'fixed'
                }
            }}
        >
        
        <Container maxWidth="lg">
            <Typography 
                variant="h3"
                textAlign="center"

                sx={{
                    fontWeight: 800,
                    mb: 2
                }}
            >
                Blog - Economias & Moedas
            </Typography>

            <Typography
                textAlign="center"
                sx={{
                    mb: 6,
                    fontSize: '1.2rem',

                }}
            >
                Conteúdo sobre câmbio, moedas internacionais e economia global.
            </Typography>

           <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}
            >

                {posts.map((post) => (
                    <BlogCard
                        key={post.id}
                        titulo={post.titulo}
                        resumo={post.resumo}
                        texto={post.texto}
                        imagem={post.imagem}
                    />
                ))}
            </Box>
        </Container>    
    </Box>
    );
}