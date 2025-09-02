import ThemeProvider from "@providers/ThemeProvider.tsx";
import GlobalStyle from "@styles/GlobalStyle.tsx";
import { AppRouterProvider } from "@providers/AppRouterProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRouterProvider />
    </ThemeProvider>
  )
}

export default App
