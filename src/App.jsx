import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Conversor from "./pages/conversor";

// 1. Configurando o Tema Escuro Monocromático (MUI)
const darkTheme = createTheme({
  shape: {
    borderRadius: 12,
  },
  palette: {
    mode: "dark",

    background: {
      default: "#3a3467",
      paper: "#3c3767",
    },
    divider: "#524666",
    primary: {
      main: "#706282",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contato" element={<Contato />} />
            <Route path="conversor" element={<Conversor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
