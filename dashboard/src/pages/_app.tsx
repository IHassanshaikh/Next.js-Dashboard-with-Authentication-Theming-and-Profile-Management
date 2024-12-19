import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header/header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App: React.FC<AppProps<{ session: any }>> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

 const darkThemeChosen = React.useMemo(
        () =>
            createTheme({
                ...darkTheme
            }),
        [mode],
    )
    const lightThemeChosen = React.useMemo(
        () =>
            createTheme({
                ...lightTheme,
            }),
        [mode],
    )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <SessionProvider session={session}>
        <CssBaseline />
          <Header ColorModeContext={ColorModeContext}/>
          <Layout>
          <Component {...pageProps} />
          </Layout>
          <Footer/>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
