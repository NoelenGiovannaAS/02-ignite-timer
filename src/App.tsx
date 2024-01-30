import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CyclesContextProvider } from "./contexts/CycleContexts";
import { Default } from "./layouts/Default";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <RouterProvider router={router} />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}
