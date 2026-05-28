import React from 'react';
import { Box, Typography, Container} from '@mui/material';
import BlogCard from '../components/BlogCard';
import imagem1 from '../assets/imgBlog/imagem1.jpeg';
import imagem2 from '../assets/imgBlog/imagem2.jpeg';
import imagem3 from '../assets/imgBlog/imagem3.jpeg';
import imagem4 from '../assets/imgBlog/imagem4.jpeg';

const posts = [
    {
        id: 1,
        titulo: 'O que é Câmbio e por que ele é importante?',
        
        resumo: 'Entenda o que é câmbio, como ele funciona e por que é tão importante para o comércio internacional, viagens e investimentos.',

        texto: 'O câmbio é a troca entre moedas de diferentes países, como Real, Dólar e Euro. Ele é muito utilizado em viagens internacionais, compras online e investimentos. As taxas de câmbio determinam quanto uma moeda vale em relação à outra e influenciam diretamente a economia mundial.',
        
        imagem: imagem1
    },

    {
        id: 2,
        titulo: 'Como funciona a conversão de moedas?',
        
        resumo: 'Veja como as taxas de câmbio são aplicadas na conversão de moedas e como o sistema calcula o valor final de forma simples.',

        texto: 'A conversão de moedas funciona através de taxas que representam o valor de uma moeda em comparação com outra. O usuário informa um valor, escolhe as moedas desejadas e o sistema realiza o cálculo automaticamente para mostrar o resultado convertido.',
        
        imagem: imagem2
    },

    {
        id: 3,

        titulo: 'Por que os valores das moedas mudam?',

        resumo: 'Descubra os principais fatores que influenciam a variação das moedas, como economia, política, inflação e taxas de juros.',

        texto: 'O valor das moedas varia por diversos fatores econômicos e políticos, como inflação, taxas de juros, comércio internacional e estabilidade do país. Essas mudanças podem aumentar ou diminuir o poder de compra de uma moeda.',
        
        imagem: imagem3
    },

    {
        id: 4,
        
        titulo: 'Principais moedas do mundo.',  

        resumo: 'Conheça as moedas mais utilizadas no mundo, como Dólar (USD), Euro (EUR) e Real (BRL), e sua importância no cenário global.',
        
        texto: 'Entre as moedas mais utilizadas no mundo estão o Dólar (USD), o Euro (EUR) e o Real (BRL). Essas moedas são importantes para o comércio internacional, turismo e investimentos financeiros realizados entre diferentes países.',
        
        imagem: imagem4
    }
];


export default function Blog() {
    return (
        <Box 
            sx={{
                minHeight: '88vh',
                py: 6,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')`,
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