import ThemeProvider from "@providers/ThemeProvider.tsx";
import GlobalStyle from "@styles/GlobalStyle.tsx";
import { AppRouterProvider } from "@providers/AppRouterProvider.tsx";
import { QueryProvider } from "@providers/QueryProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <GlobalStyle />
        <AppRouterProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
