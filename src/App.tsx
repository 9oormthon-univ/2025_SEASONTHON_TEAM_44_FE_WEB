import ThemeProvider from '@providers/ThemeProvider.tsx';
import GlobalStyle from '@styles/GlobalStyle.tsx';
import { AppRouterProvider } from '@providers/AppRouterProvider.tsx';
import { QueryProvider } from '@providers/QueryProvider.tsx';
import Chatbot from '@components/chatbot/Chatbot.tsx';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <GlobalStyle />
        <AppRouterProvider />
        <Chatbot />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
