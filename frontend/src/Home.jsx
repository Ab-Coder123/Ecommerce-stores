import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./them";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function Home() {
  const [theme, colorMode] = useMode();
  return (
    
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg
          }
        >
          <Hero />
          <Main />
        </Box>


        <Footer />


        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider> 

  );
}

export default Home;






















// F IEFUIEFUIEFEIUIIEEEEIU IU e kjf 8 7y8fc kfjo;  hjh u7efi oikkdsjhuhv idyf ieikas iufi9oeu kjdcoi0oi h ieldfu'EUC89VUCIUF KOIUDV 9IEUFV ILEILV .FU.LIUFIUEWFIO89OIUFIL8UEWF;OPSCV'FQK/;