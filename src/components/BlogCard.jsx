import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

export default function BlogCard({
  titulo,
  resumo,
  texto,
  imagem
}) 

{
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
};

  return (

    <Card
      sx={{
        width: 260,
        borderRadius: 1,
        boxShadow: 4,
        backgroundColor: '#3b2a5a',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start'
      }}
    >

      <CardMedia
        component="img"
        height="180"
        image={imagem}
        alt={titulo}
      />

      <CardContent>

        <Typography
          variant="h6"
          sx={{
            flexWeight: 'bold',
            mb: 2
          }}
        >
          {titulo}
        </Typography>

        <Typography variant="body2" sx={{ textAlign: 'justify', lineHeight: 1.9}}>
          {resumo}
        </Typography>

      </CardContent>

        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
        >

        <CardContent>

            <Typography
                variant="body2"
                sx={{
                  textAlign: 'justify',
                  lineHeight: 1.8,
                  color: '#ffffff'
                }}
                >
                {texto}
            </Typography>

        </CardContent>

    </Collapse>
    
     <CardActions disableSpacing
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            pb: 2
          }}
      >

        <Typography
            onClick={handleExpandClick}
            sx={{
                ml: 1,
                color: '#f1f1f1',
                fontWeight: 'bold',
                cursor: 'pointer',
                userSelect: 'none'
            }}
        >
          {expanded ? 'Ler menos' : 'Ler mais'}
        </Typography>

      </CardActions>

</Card>
);
}