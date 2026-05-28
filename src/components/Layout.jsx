import { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Blog', path: '/blog' },
    { text: 'Fale Conosco', path: '/contato' },
    { text: 'Conversor', path: '/conversor' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      {/* CABEÇALHO */}
      <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }}>
            ☰ MENU
          </Typography>
          
          {/* Espaçador para empurrar os botões para a direita */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Botões do Menu (escondidos no mobile, visíveis em telas médias e grandes) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button 
                key={item.text} 
                component={Link} 
                to={item.path} 
                sx={{ color: '#ffffff', border: 2 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER (MENU LATERAL) */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250}} onClick={() => setOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
              button key={item.text} 
              component={Link} to={item.path} 
              sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* CONTEÚDO DAS PÁGINAS */}
      <Box component="main" sx={{ flexGrow: 1, }}>
        <Outlet />
      </Box>

      {/* RODAPÉ */}
      <Box component="footer" sx={{ p: 3, position: 'fixed-end' ,textAlign: 'center', bgcolor: '#524666' }}>
        <Typography variant="body2">© 2026 Sistema Financeiro - Todos os direitos reservados</Typography>
      </Box>
    </Box>
  );
}