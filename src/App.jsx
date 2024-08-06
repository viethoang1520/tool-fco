import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes/Route";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { AppProvider } from "./Context/AppContext";

function App() {

  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout || DefaultLayout;
              return (
                <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />
              )
            })}
          </Routes>
        </Router>
      </AppProvider>
    </>
  )
}

export default App
