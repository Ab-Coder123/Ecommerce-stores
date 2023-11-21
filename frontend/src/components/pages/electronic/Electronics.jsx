import Header1 from "../../header/Header1";
import Header2 from "../../header/Header2";
import Header3 from "../../header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../them";
import Footer from "../../footer/footer";
import ScrollToTop from "../../scroll/ScrollToTop";

import Hero from "../electronic/hero/Hero"
import Main from "../electronic/main/main"
const Electronics = () => {
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
          <Hero/>
          <Main />
        </Box>
        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider> 
    
)
        }

export default Electronics